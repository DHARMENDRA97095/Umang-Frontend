"use client";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full lg:w-1/2 backdrop-blur-sm px-8 py-12 flex flex-col gap-5"
    >
      {/* Row 1 */}
      <div className="flex flex-col md:flex-row gap-5">
        <div className="flex-1">
          <input
            {...register("name", { required: "Name is required" })}
            placeholder="What's your name?"
            className="w-full p-4 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-300"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>
        <div className="flex-1">
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Enter a valid email",
              },
            })}
            placeholder="Email address"
            className="w-full p-4 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-300"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex flex-col md:flex-row gap-5">
        <div className="flex-1">
          <input
            {...register("topic")}
            placeholder="Select a Discussion Topic"
            className="w-full p-4 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>
        <div className="flex-1">
          <input
            {...register("budget")}
            placeholder="What's your budget?"
            className="w-full p-4 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>
      </div>

      {/* Textarea */}
      <textarea
        {...register("message")}
        placeholder="A brief description about your project/request/consultation"
        className="w-full p-4 rounded-2xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-300 h-40"
      />

      {/* Checkbox */}
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          {...register("privacy", { required: "You must accept the Privacy Policy" })}
          className="w-5 h-5"
        />
        <label className="text-gray-700">I accept Privacy Policy</label>
      </div>
      {errors.privacy && <p className="text-red-500 text-sm">{errors.privacy.message}</p>}

      {/* Button */}
      <button
        type="submit"
        className="bg-gray-700 text-white py-4 rounded-full w-full text-lg font-semibold hover:bg-gray-900 transition-all duration-300"
      >
        — send message
      </button>
    </form>
  );
}
