import type { string } from "yup";

/**
 * Can be made globally available by placing this
 * inside `global.d.ts` and removing `export` keyword
 */
export interface Locals {
	userid: string;
}

export interface Vote {
	UserRefer?: number;
	ChoiceRefer?: number;
}

export interface Choice {
	ID?: number;
	Value: string;
	Votes: Vote[];
}

export interface Question {
	Value: string;
	Choices: Choice[];
}

export interface Survey {
	ID?: number;
	UserRefer?: number;
	Questions: Question[];
	Subject: string;
	Description: string;
	DateStart: moment.Moment;
	DateEnd: moment.Moment;
	ConfirmStatus: string;
}
