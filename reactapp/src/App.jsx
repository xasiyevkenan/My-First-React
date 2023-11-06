import Course from "./Course";
import image1 from "./assets/slide1.jpg";
import image2 from "./assets/slide2.jpg";
import image3 from "./assets/slide3.jpg";

function App() {
  return (
    <>
      <div className="container">
        <div className="courses">
          <Course
            title="Angular"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium cumque nemo laborum obcaecati ipsum aliquam sed provident a veniam neque quasi ullam fugiat animi, quos atque magnam, necessitatibus voluptas doloremque? Possimus quod quae officiis dolores obcaecati. Harum facilis quia ratione ad, accusantium labore vero repellat similique perferendis vel repudiandae itaque enim inventore officiis odit temporibus expedita laboriosam ex atque! Mollitia aliquam doloremque consectetur in fuga dicta perspiciatis ratione, vel dolor ut deleniti consequatur commodi animi dolorum? Culpa commodi maxime corporis? Minima beatae, vero nemo assumenda veniam tempore error et dolorum consequatur sit minus recusandae eveniet suscipit in officia deleniti odit."
            img={image1}
          ></Course>

          <Course
            title="React"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium cumque nemo laborum obcaecati ipsum aliquam sed provident a veniam neque quasi ullam fugiat animi, quos atque magnam, necessitatibus voluptas doloremque? Possimus quod quae officiis dolores obcaecati. Harum facilis quia ratione ad, accusantium labore vero repellat similique perferendis vel repudiandae itaque enim inventore officiis odit temporibus expedita laboriosam ex atque! Mollitia aliquam doloremque consectetur in fuga dicta perspiciatis ratione, vel dolor ut deleniti consequatur commodi animi dolorum? Culpa commodi maxime corporis? Minima beatae, vero nemo assumenda veniam tempore error et dolorum consequatur sit minus recusandae eveniet suscipit in officia deleniti odit."
            img={image2}
          ></Course>

          <Course
            title="TypeScript"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium cumque nemo laborum obcaecati ipsum aliquam sed provident a veniam neque quasi ullam fugiat animi, quos atque magnam, necessitatibus voluptas doloremque? Possimus quod quae officiis dolores obcaecati. Harum facilis quia ratione ad, accusantium labore vero repellat similique perferendis vel repudiandae itaque enim inventore officiis odit temporibus expedita laboriosam ex atque! Mollitia aliquam doloremque consectetur in fuga dicta perspiciatis ratione, vel dolor ut deleniti consequatur commodi animi dolorum? Culpa commodi maxime corporis? Minima beatae, vero nemo assumenda veniam tempore error et dolorum consequatur sit minus recusandae eveniet suscipit in officia deleniti odit."
            img={image3}
          ></Course>
        </div>
      </div>
    </>
  );
}
export default App;
