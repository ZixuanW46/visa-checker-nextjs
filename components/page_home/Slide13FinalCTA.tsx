import SnapScrollSection from "@/components/page_home/SnapScroll";
import Image from "next/image";
import background_decoration from "@/public/background_decoration.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Slide1Opening = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <SnapScrollSection className="flex flex-col h-100dvh overflow-hidden">
      <div className="w-full h-[5rem] flex-shrink-0 min-h-[5rem] bg-white hidden md:block"></div>
      <div ref={ref} className="w-full flex-1 md:pt-2 md:pb-8 md:px-8">
        <div className="w-full h-full bg-logo md:rounded-[30px] relative">
          <Image
            src={background_decoration}
            alt="background_decoration"
            className="absolute top-1/2 left-0 w-full object-cover opacity-100 -translate-y-1/2"
            loading="eager"
          />
          <div className="w-full h-full hidden md:flex justify-center items-center z-10 relative p-2 overflow-hidden">
            <div className="w-fit h-full flex flex-col justify-center items-center">
              <div className="text-[9dvw] font-bold text-white font-pt-sans-narrow relative">
                CHINA...SHALL I?
                <div className="absolute top-0 right-0 w-[50%] h-full">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 314 86"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <motion.path
                      key={isInView ? "inView1" : "outOfView1"}
                      initial={{
                        pathLength: 0,
                      }}
                      animate={
                        isInView && {
                          pathLength: 1,
                        }
                      }
                      transition={{ duration: 1.5, delay: 1 }}
                      d="M6.5376 60.0014C27.07 56.1502 149.366 33.1991 178.135 27.8462C207.27 22.425 236.381 17.0232 265.653 12.4064C278.196 10.428 290.743 8.41791 303.315 6.62848C304.683 6.43389 308.503 5.48287 307.451 6.37727C304.407 8.96463 299.162 10.196 295.586 11.8073C280.167 18.755 264.584 24.9382 248.551 30.3583C223.757 38.7405 198.618 45.9184 173.458 53.1027C160.771 56.7255 148.04 60.2735 135.506 64.4072C130.382 66.0972 125.194 67.8846 120.337 70.2624C119.5 70.6718 117.938 71.4191 117.167 72.2141C116.617 72.782 117.167 73.0491 117.689 73.1417C119.081 73.3887 120.856 73.2017 122.192 73.1417C128.054 72.8782 133.927 72.412 139.757 71.7503C158.621 69.6094 177.347 65.7895 195.913 61.8951C208.735 59.2055 221.528 55.2117 234.541 53.5471C235.327 53.4467 240.792 52.1693 238.967 54.7066C235.08 60.1095 228.981 63.9462 224.087 68.3493C222.266 69.9877 216.742 74.252 218.425 77.4316C220.395 81.1524 229.934 78.8526 232.88 78.3591C249.897 75.5081 266.858 74.2463 284.107 73.9146"
                      stroke="#304139"
                      strokeWidth="12"
                    />
                  </svg>
                </div>
                <div className="absolute right-[-10%] top-[78%] w-[45%] h-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                    viewBox="0 0 282 85"
                    fill="none"
                  >
                    <motion.path
                      key={isInView ? "inView2" : "outOfView2"}
                      initial={{
                        pathLength: 0,
                      }}
                      animate={
                        isInView && {
                          pathLength: 1,
                        }
                      }
                      transition={{ duration: 2, delay: 2.5 }}
                      d="M8.5895 59.5757C6.45546 62.5396 5.61818 66.5707 6.16054 70.1864C7.13713 76.697 11.2412 77.6329 17.1122 76.9619C43.4432 73.9527 62.8189 44.4745 77.0265 25.0163C79.836 21.1685 87.7357 9.30002 85.5066 13.5107C82.2198 19.7191 80.7216 26.664 79.5833 33.5389C77.8101 44.2492 74.5629 58.3811 78.7737 68.908C82.1022 77.2294 90.5841 80.7565 98.7593 77.1324C108.798 72.6821 116.16 62.7656 122.41 54.1638C129.888 43.8707 136.724 31.7335 138.518 18.9226C139.188 14.1372 137.347 9.06876 132.85 6.82039C130.361 5.57571 127.34 5.5088 126.032 8.31186C124.038 12.5854 125.873 18.8921 127.225 23.0561C129.467 29.9616 133.821 34.2127 140.137 37.5872C145.426 40.4129 151.272 42.2288 157.267 42.6156C159.474 42.7579 164.949 42.0134 161.444 45.1298C154.415 51.3771 144.911 62.4699 146.06 72.7006C147.402 84.6394 170.254 70.4479 174.014 66.9904C181.51 60.0981 172.698 54.4893 165.662 53.6098C164.512 53.4661 159.447 54.58 163.276 54.803C170.114 55.2013 176.426 52.6196 183.134 52.0757C193.547 51.2314 191.453 58.8764 192.85 66.1381C193.901 71.6061 204.492 59.2203 205.974 57.7859C213.896 50.1199 211.433 71.8719 220.207 67.587C225.922 64.7959 233.411 58.205 233.162 51.053C232.972 45.6127 222.618 42.3293 218.758 40.3997"
                      stroke="#304139"
                      strokeWidth="12"
                    />
                    <motion.path
                      key={isInView ? "inView3" : "outOfView3"}
                      initial={{
                        pathLength: 0,
                      }}
                      animate={
                        isInView && {
                          pathLength: 1,
                        }
                      }
                      transition={{ duration: 0.5, delay: 4.5 }}
                      d="M275.133 14.3936C275.133 23.3638 274.388 32.2754 273.792 41.2186"
                      stroke="#304139"
                      strokeWidth="12"
                    />
                    <motion.path
                      key={isInView ? "inView4" : "outOfView4"}
                      initial={{
                        opacity: 0,
                      }}
                      animate={
                        isInView && {
                          opacity: 1,
                        }
                      }
                      transition={{ duration: 0.5, delay: 5 }}
                      d="M272.451 65.361C273.146 64.7523 274.13 63.18 272.451 64.0198"
                      stroke="#304139"
                      strokeWidth="12"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-full h-full md:hidden flex flex-col justify-start gap-y-5
           items-center z-10 relative pt-[28dvh] overflow-hidden"
          >
            <div className="w-fit h-fit flex flex-col justify-center items-center">
              <div className="text-[18dvw] font-bold text-white font-pt-sans-narrow relative">
                <span className="">CHINA...</span>
                <span className="block">SHALL I?</span>

                <div className="absolute bottom-0 right-0 w-[100%] h-[50%]">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 314 86"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <motion.path
                      key={isInView ? "inView1" : "outOfView1"}
                      initial={{
                        pathLength: 0,
                      }}
                      animate={
                        isInView && {
                          pathLength: 1,
                        }
                      }
                      transition={{ duration: 1.5, delay: 1 }}
                      d="M6.5376 60.0014C27.07 56.1502 149.366 33.1991 178.135 27.8462C207.27 22.425 236.381 17.0232 265.653 12.4064C278.196 10.428 290.743 8.41791 303.315 6.62848C304.683 6.43389 308.503 5.48287 307.451 6.37727C304.407 8.96463 299.162 10.196 295.586 11.8073C280.167 18.755 264.584 24.9382 248.551 30.3583C223.757 38.7405 198.618 45.9184 173.458 53.1027C160.771 56.7255 148.04 60.2735 135.506 64.4072C130.382 66.0972 125.194 67.8846 120.337 70.2624C119.5 70.6718 117.938 71.4191 117.167 72.2141C116.617 72.782 117.167 73.0491 117.689 73.1417C119.081 73.3887 120.856 73.2017 122.192 73.1417C128.054 72.8782 133.927 72.412 139.757 71.7503C158.621 69.6094 177.347 65.7895 195.913 61.8951C208.735 59.2055 221.528 55.2117 234.541 53.5471C235.327 53.4467 240.792 52.1693 238.967 54.7066C235.08 60.1095 228.981 63.9462 224.087 68.3493C222.266 69.9877 216.742 74.252 218.425 77.4316C220.395 81.1524 229.934 78.8526 232.88 78.3591C249.897 75.5081 266.858 74.2463 284.107 73.9146"
                      stroke="#304139"
                      strokeWidth="12"
                    />
                  </svg>
                </div>
                <div className="absolute right-[-8%] top-[95%] w-[98%] h-[50%]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                    viewBox="0 0 282 85"
                    fill="none"
                  >
                    <motion.path
                      key={isInView ? "inView2" : "outOfView2"}
                      initial={{
                        pathLength: 0,
                      }}
                      animate={
                        isInView && {
                          pathLength: 1,
                        }
                      }
                      transition={{ duration: 2, delay: 2.5 }}
                      d="M8.5895 59.5757C6.45546 62.5396 5.61818 66.5707 6.16054 70.1864C7.13713 76.697 11.2412 77.6329 17.1122 76.9619C43.4432 73.9527 62.8189 44.4745 77.0265 25.0163C79.836 21.1685 87.7357 9.30002 85.5066 13.5107C82.2198 19.7191 80.7216 26.664 79.5833 33.5389C77.8101 44.2492 74.5629 58.3811 78.7737 68.908C82.1022 77.2294 90.5841 80.7565 98.7593 77.1324C108.798 72.6821 116.16 62.7656 122.41 54.1638C129.888 43.8707 136.724 31.7335 138.518 18.9226C139.188 14.1372 137.347 9.06876 132.85 6.82039C130.361 5.57571 127.34 5.5088 126.032 8.31186C124.038 12.5854 125.873 18.8921 127.225 23.0561C129.467 29.9616 133.821 34.2127 140.137 37.5872C145.426 40.4129 151.272 42.2288 157.267 42.6156C159.474 42.7579 164.949 42.0134 161.444 45.1298C154.415 51.3771 144.911 62.4699 146.06 72.7006C147.402 84.6394 170.254 70.4479 174.014 66.9904C181.51 60.0981 172.698 54.4893 165.662 53.6098C164.512 53.4661 159.447 54.58 163.276 54.803C170.114 55.2013 176.426 52.6196 183.134 52.0757C193.547 51.2314 191.453 58.8764 192.85 66.1381C193.901 71.6061 204.492 59.2203 205.974 57.7859C213.896 50.1199 211.433 71.8719 220.207 67.587C225.922 64.7959 233.411 58.205 233.162 51.053C232.972 45.6127 222.618 42.3293 218.758 40.3997"
                      stroke="#304139"
                      strokeWidth="12"
                    />
                    <motion.path
                      key={isInView ? "inView3" : "outOfView3"}
                      initial={{
                        pathLength: 0,
                      }}
                      animate={
                        isInView && {
                          pathLength: 1,
                        }
                      }
                      transition={{ duration: 0.5, delay: 4.5 }}
                      d="M275.133 14.3936C275.133 23.3638 274.388 32.2754 273.792 41.2186"
                      stroke="#304139"
                      strokeWidth="12"
                    />
                    <motion.path
                      key={isInView ? "inView4" : "outOfView4"}
                      initial={{
                        opacity: 0,
                      }}
                      animate={
                        isInView && {
                          opacity: 1,
                        }
                      }
                      transition={{ duration: 0.5, delay: 5 }}
                      d="M272.451 65.361C273.146 64.7523 274.13 63.18 272.451 64.0198"
                      stroke="#304139"
                      strokeWidth="12"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SnapScrollSection>
  );
};

export default Slide1Opening;
