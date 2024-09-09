export const isZixuanRelated = (question) => {
    const zixuanKeywords = ["子炫", "子炫的", "zixuan", "Zixuan"];
    
    return zixuanKeywords.some(keyword => question.includes(keyword));
};
