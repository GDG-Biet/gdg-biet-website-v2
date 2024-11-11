import Form from "@/components/Form";
import Animation from "@/components/animation/Animation"
export default function Events(){
    return(
        <>
        {/* Hero Section */}
      <div className="h-[30vh]"></div>
       <div className=" flex justify-center w-[90%] bg-blue-500 m-auto p-4 dark:bg-gray-900 dark:bg-opacity-50 backdrop-blur-lg rounded-xl relative">
        <Form></Form>
       </div>
       <div className="absolute top-48 w-full flex justify-center"><Animation></Animation></div>
       </>
    )
}
