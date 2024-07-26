import { Label } from "./components/ui/label";
import GridPattern from "./components/magicui/animated-grid-pattern";
import '../src/assets/css/style.css'

export default function App() {
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <GridPattern />
        <Label htmlFor="email">Your email address</Label>
      </div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}
