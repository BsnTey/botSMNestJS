import { Scenes } from 'telegraf';

interface SessionData {
    [key: string]: any;
}

// export interface MyContext extends Context {
export interface Context extends Scenes.SceneContext {
    mySession?: SessionData;
}

// export interface MyContext extends Context {
//     session?: SessionData;
// }
