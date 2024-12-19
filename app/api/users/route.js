import connectDB from "@/lib/ConnectDb"
import { userModel } from "@/lib/models/user";

export async function POST(req) {
    await connectDB();
    try {
      const obj = await req.json();
      let newUser = await new userModel({ ...obj });
      newUser = await newUser.save();
  
      return Response.json(
        {
          error: false,
          msg: "User Registered Successfully",
          user: newUser,
        },
        { status: 201 }
      );
    } catch (e) {
      return Response.json(
        {
          error: true,
          msg: "Something went wrong",
        },
        { status: 400 }
      );
    }
  }

export async function GET(req) {
  await connectDB();
  const users = await userModel.find();
  return Response.json(
    {
      error: false,
      msg: "User fetched Successfully",
      users,
    },
    { status: 200 }
  );
}