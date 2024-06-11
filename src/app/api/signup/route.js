export const POST = async  (req) => {
    const data = await req.json();

    const fullname = data.fullname;
    const email = data.email;
    const username = data.username;
    const password = data.password;

    console.log(data);
    // const unameExist 
}