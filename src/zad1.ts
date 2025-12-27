type User = {
    name: string;
    address?: {
        street?: string;
        city?: string;
    };
};

function getUserCity(user:User | null): string {
    return user?.address?.city || 'Nieznane miasto';
}

let u1: User = {
    name: "blablabla",
    address: {
        street: "eeesdfsefs",
        city: undefined,
    },
}

console.log(getUserCity(u1));
