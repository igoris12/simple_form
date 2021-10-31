const validation = (input) => {
    if (input == '' || input == null || input == undefined) {
        return false;
    }
    else {
        return true;
    }
}

export { validation }