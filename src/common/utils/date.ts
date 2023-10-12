export const getCurrentTimestamp = () => {
    const timestamp = new Date().getTime();
    return Math.floor(timestamp / 1000);
};
