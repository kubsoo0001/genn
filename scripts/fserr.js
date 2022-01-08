module.exports = (message, err) => {
    message.channel.send("O nie! Błąd!");
    console.error(err);
};