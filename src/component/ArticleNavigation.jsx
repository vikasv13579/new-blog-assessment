import React from "react";
import Image from "next/image";
import Link from "next/link";
import Pre from "@/assets/images/pre.svg";
import Next from "@/assets/images/next.svg";

const ArticleNavigation = React.memo(function ArticleNavigation() {
  // Note: The links and text are currently hardcoded as in the original component.
  // In a real application, these would be passed as props.
  return (
    <div className="pre_next_block">
      <div className="pre_item">
        <Link href="#" className="btn btn_outline_primary">
          <Image src={Pre} alt="icon" width={16} height={16} /> Previous
        </Link>
        <p className="para">5 Tips for Better Cardio Sessions</p>
      </div>
      <div className="next_item">
        <Link href="#" className="btn btn_outline_primary">
          Next
          <Image src={Next} alt="icon" width={16} height={16} />
        </Link>
        <p className="para">Meal Prep Basics for Gym Enthusiasts</p>
      </div>
    </div>
  );
});

export default ArticleNavigation;
