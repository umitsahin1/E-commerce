import { Rating } from "@mui/material";

const Reviews = () => {
  return (
    <div className="md:w-[1050px] mx-auto flex flex-col gap-8">
      <div>
        <h3 className="mb-4">Reviews :</h3>
        <p className="">There are no reviews yet.</p>
      </div>
      <h3>Be the first to review “Product Name”</h3>
      <div>
        <p>Your Rating</p>
        <Rating />
      </div>

      <form className="flex flex-col gap-4">
        <div>
          <p className="mb-4">Your Review *</p>
          <textarea
            id="text-area"
            name="text-area"
            className="md:w-[1050px] w-[300px] md:h-[140px] border rounded-md p-4 pt-6 bg-[#F9F9F9] text-[14px] "
            placeholder="Message"
          ></textarea>
        </div>
        <div className="flex justify-between ">
          <div>
            <p className="mb-4">Name *</p>
            <input
              type="text"
              name="name"
              id="name"
              className="md:w-[494px] md:h-[50px]  border rounded-md bg-[#F9F9F9] p-4  text-[14px]"
              placeholder="Name * "
            />
          </div>
          <div>
            <p className="mb-4">Email *</p>
            <input
              type="email"
              name="email"
              id="email"
              className="md:w-[510px]  md:h-[50px] border rounded-md bg-[#F9F9F9] p-4 text-[14px]"
              placeholder="Email * "
            />
            <p className="text-[12px] text-[#737373] ml-2 mt-2">
              We'll never share your email with anyone else.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            className="w-[20px] h-[20px] border-gray-300"
          />
          <p className=" text-[#737373] text-[16px]">
            Save my name, email, and website in this browser for the next time I
            comment.
          </p>
        </div>
        <button className="bg-[#23A6F0] w-[135px] h-[52px] rounded-md text-white">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Reviews;
