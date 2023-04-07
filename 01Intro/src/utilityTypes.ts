// Utility Types

// Partial

interface Assignment {
	studentId: string;
	title: string;
	grade: number;
	verified?: boolean;
}

const updateAssignment = (
	assign: Assignment,
	propsToUpdate: Partial<Assignment>
): Assignment => {
	return { ...assign, ...propsToUpdate };
};

const assign: Assignment = {
	studentId: "1234",
	title: "Assignment 1",
	grade: 100,
};

console.log(updateAssignment(assign, { grade: 90, verified: true }));

const assignGraded: Assignment = updateAssignment(assign, { grade: 56 });

// Required and readonly
const recordAssignment = (assign: Required<Assignment>): Assignment => {
	return { ...assign };
};

const assign2: Assignment = {
	studentId: "sds5432",
	title: "Final Project",
	grade: 10,
	verified: false,
};

const assignVerified: Readonly<Assignment> = {
	...assignGraded,
	verified: true,
};

console.log(assignVerified);

console.log(recordAssignment({ ...assignVerified, verified: true }));

const hexColorMap: Record<string, string> = {
	red: "F00",
	green: "0F0",
	blue: "00F",
};

type Students = "Sara" | "Kelly";
type LetterGrades = "A" | "B" | "C" | "D";

const finalGrades: Record<Students, LetterGrades> = {
	Sara: "B",
	Kelly: "D",
};

interface Grades {
	assign1: number;
	assign2: number;
}

const gradesData: Record<Students, Grades> = {
	Sara: { assign1: 50, assign2: 70 },
	Kelly: { assign1: 50, assign2: 70 },
};

// Pick and Omit

type AssignResult = Pick<Assignment, "studentId" | "grade">;

const score: AssignResult = {
	studentId: "sds5432",
	grade: 97,
};
type AssignPreview = Omit<Assignment, "grade" | "verified">;

const preview: AssignPreview = {
	studentId: "sls4353",
	title: "Final Project",
};

// Exclude and Extract - union types
type adjustGrade = Exclude<LetterGrades, "D">;

type highGrades = Extract<LetterGrades, "A" | "B">;

// Nonnullable
type AllPossibleGrades = "Ivan" | "Ian" | null | undefined;

type NamesOnly = NonNullable<AllPossibleGrades>;

// ReturnType

// type newAssign = { title : string, points: number }

const createNewAssign = (title: string, points: number) => {
	return { title, points };
};

type NewAssign = ReturnType<typeof createNewAssign>;

const tsAssign: NewAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);

// parameters
type AssignParams = Parameters<typeof createNewAssign>;

const assignArgs: AssignParams = ["Generics", 100];

const tsAssign2: NewAssign = createNewAssign(...assignArgs);

console.log(tsAssign2);

// Awaited - helps us with the ReturnTpe of a Promise
interface User {
	id: number;
	name: string;
	username: string;
	email: string;
}

const fetchUsers = async (): Promise<User[]> => {
	const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
		.then((res) => res.json())
		.catch((err) => {
			if (err instanceof Error) console.log(err);
		});
	return response;
};

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;

fetchUsers().then((users) => {
	console.log(users);
});
