export const POST = async  (req) => {
    const data = await req.json();

    const name = data.name;
    const email = data.email;
    const username = data.username;
    const password = data.password;

    console.log(name);
    // const unameExist 
}