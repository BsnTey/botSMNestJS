// import dotenv from 'dotenv';
require('dotenv').config();

export const botName = process.env.BOT_NAME;

export const telegramApi = process.env.TELEGRAM_API;
export const adminId = Number(process.env.ADMIN_ID);
