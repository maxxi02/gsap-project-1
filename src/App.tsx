import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div className="h-screen flex-center">
      <h1 className="text-3xl text-indigo-300">GSAP, Hello</h1>
    </div>
  );
};

export default App;
