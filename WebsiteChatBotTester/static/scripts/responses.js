function getBotResponse(input) {

    // Iuana responses
    if (input == "hello") {
        return "Iuana says: 'Hello child.' ";

    } else if (input == "bye") {
        return "Iuana says: 'I shall see you in DARK CITY, child.' ";
    
    } else if (input == "when are the keys dropped") {
        return "Iuana Says: 'The SOL has chosen to hide this information from you rats.' ";

    } else if (input == "what is the key supply") {
        return "Iuana Says: 'There are 9696 Keys.'";

    } else if (input == "what is the mint price") {
        return "Iuana Says: 'The mint price is 0.19 Sol.'";

    } else if (input == "what is the accelerator") {
        return "Iuana Says: 'The accelerator is KozyDao.'";

    } else if (input == "i request the sol") {
        return "Iuana Says: The SOL has chosen you. You may ask me:   'when are the keys dropped',\
           'what is the key supply',   'what is the mint price',   'what is the accelerator',   \
           AND   'what is DARK CITY' " ;

    } else {
        return "Iuana says: 'Type 'i request the sol' for more information.' ";
    }


}