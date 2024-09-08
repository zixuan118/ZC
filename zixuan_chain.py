import json
from langchain_openai import ChatOpenAI
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

class ZixuanPersonaChain:
    def __init__(self, personality_data_path):
        self.personality_data = self.load_personality_data(personality_data_path)
        self.llm = ChatOpenAI(model="gpt-3.5-turbo")

    def load_personality_data(self, path):
        with open(path, 'r', encoding='utf-8') as f:
            return json.load(f)

    def find_best_response(self, user_input):
        contents = [entry["content"] for entry in self.personality_data]
        vectorizer = TfidfVectorizer().fit_transform(contents)
        user_vector = vectorizer.transform([user_input])
        similarities = cosine_similarity(user_vector, vectorizer).flatten()
        best_match_index = similarities.argmax()
        best_match_score = similarities[best_match_index]
        if best_match_score > 0.5:  # 设定一个匹配阈值
            return self.personality_data[best_match_index]["response"]
        return None

    def process_input(self, user_input, history):
        predefined_response = self.find_best_response(user_input)
        if predefined_response:
            return predefined_response
        else:
            response = self.llm.invoke([{
                "role": "user", "content": user_input
            }])
            return response["choices"][0]["message"]["content"]
