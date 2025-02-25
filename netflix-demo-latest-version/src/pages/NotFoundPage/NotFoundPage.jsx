import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import cuteCat from "../../assets/kitty.png"; // 이미지 경로 확인 필수!
import { style } from "framer-motion/client";
import './NotFoundPage.style.css';

export default function NotFound() {
  return (
    <div className="notFount-div">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-xl mt-2">앗! 길을 잃었어요 🐾</p>
        <div className="motion-img-div">
            <motion.img
            width={40}
            src={cuteCat}
            alt="Cute cat"
            className="mx-auto" // 이미지 크기 줄임
            initial={{ y: -10 }}
            animate={{ y: 10 }}
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.5 }}
            />
        </div>
        <p className="mt-2 text-gray-600">하지만 걱정 마세요, 돌아갈 길이 있어요! 🏡</p>
        <Link
          to="/"
          className="link-class"
        >
          홈으로 가기
        </Link>
      </motion.div>
    </div>
  );
}
