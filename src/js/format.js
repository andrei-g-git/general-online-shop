const formatWithHyphen = (productTitle) => { 
    //ew ew ewww regex get it off getitoofffff!!
    const firstPass = productTitle.replace(/ /g, "-");
    const secondPass = firstPass.replace(/\./g, "-");
    return secondPass.replace(/,/g, "-"); 
}

export { formatWithHyphen }