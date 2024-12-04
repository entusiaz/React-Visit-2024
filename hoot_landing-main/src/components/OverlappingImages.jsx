import React from "react";
import { earlyAccessMembers } from "../constants";

const OverlappingImages = () => {
  {
    return (
      <div className={`flex relative w-full top-0 left-0`}>
        {earlyAccessMembers.map((earlyAccessMember) => (
          <img
            className="border-2 border-white border-xl rounded-[20px] w-[48px] h-[48px] max-sm:w-[32px] max-sm:h-[32px] transition-transform duration-500 transform"
            style={{
              transform: `translate(${earlyAccessMember.id * -5}px)`,
              zIndex: earlyAccessMembers.length - earlyAccessMember.id,
            }}
            src={earlyAccessMember.imageurl}
            key={earlyAccessMember.id}
            {...earlyAccessMember}
          />
        ))}
      </div>
    );
    // });
  }
};

export default OverlappingImages;
