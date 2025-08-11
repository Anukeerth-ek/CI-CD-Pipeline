const Greeting = ({ greet }: { greet: string }) => {
     return <div>Hello {greet || "Guest"}</div>;
};

export default Greeting;
