import { useRef, useState } from "react";
import { CardContainer } from "./styles";

interface CardProps {
  img: string;
  title: string;
}

export function Card({ img, title }: CardProps) {
  const [xRotation, setXRotation] = useState(0);
  const [yRotation, setYRotation] = useState(0);
  const cardRef = useRef(null);
  const imgRef = useRef(null);
  const titleRef = useRef(null);

  function handleMouseMove(event: any) {
    const card: any = cardRef.current;
    const { offsetWidth: width, offsetHeight: height } = card;
    const { clientX, clientY } = event;
    const x = clientX - card.offsetLeft - width / 0.6;
    const y = clientY - card.offsetTop - height / 1;
    var mult = 10;
    setXRotation((y / height) * mult);
    setYRotation((x / width) * mult);
  }

  function handleMouseEnter() {
    const img: any = imgRef.current;
    const title: any = titleRef.current;

    title.style.transform = "translateZ(50px)";
    img.style.transform = "translateZ(50px) rotateZ(-10deg)";
  }

  function handleMouseLeave() {
    setXRotation(0);
    setYRotation(0);

    const img: any = imgRef.current;
    const title: any = titleRef.current;

    title.style.transform = "translateZ(0px)";
    img.style.transform = "translateZ(0px) rotateZ(0deg)";
  }

  return (
    <CardContainer
      ref={cardRef}
      style={{
        transform: `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={img} alt="" ref={imgRef} />
      <p ref={titleRef}>{title}</p>
    </CardContainer>
  );
}
