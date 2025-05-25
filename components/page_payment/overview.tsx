import Image from "next/image";
import alipay_logo from "@/public/alipay_logo.png";
import wechatPay_logo from "@/public/wechatPay_logo.png";
import card_logo from "@/public/card_logo.png";
import cash_logo from "@/public/cash_logo.png";
import star_icon from "@/public/star.png";
import star_empty from "@/public/star_empty.png";

const Overview = () => {
  return (
    <div className="w-full min-w-[20rem] max-w-[80rem] mx-auto flex flex-col justify-center lg:px-[5rem] md:px-8 px-3 mt-[5rem]">
      <div className="w-[100vw] min-w-[20rem] md:w-full flex flex-col md:gap-9 gap-5 items-center md:pb-[2.5rem] pb-[3.5rem] bg-[#F3F3F3] md:bg-transparent md:mx-0 -mx-3 px-3 md:px-0 pt-[3.5rem] md:pt-0">
        <p className="md:text-4xl text-2xl font-bold">Overview</p>
        <p className="md:text-sm text-xs font-normal">
          The three main payment methods — Cash, Card, and Digital Wallet — have
          varying levels of acceptance and reliability in China. Here&apos;s a
          quick overview:
        </p>
      </div>
      <div className="hidden md:grid grid-cols-4 grid-rows-[6rem_1fr_1fr] gap-y-4 gap-x-4 lg:gap-x-10 w-full mt-[2.5rem]">
        <div className="col-span-1 row-span-1"></div>
        <div className="col-span-1 row-span-1 text-base font-bold flex flex-col items-center gap-2">
          <div className="flex justify-center items-center gap-4">
            <Image src={alipay_logo} alt="alipay logo" height={25} />
            <Image src={wechatPay_logo} alt="wechat pay logo" height={25} />
          </div>
          <p>Digital Wallet</p>
        </div>
        <div className="col-span-1 row-span-1 text-base font-bold flex flex-col items-center gap-2">
          <Image src={cash_logo} alt="alipay logo" height={25} />
          <p>Cash Payment</p>
        </div>
        <div className="col-span-1 row-span-1 text-base font-bold flex flex-col items-center gap-2">
          <Image src={card_logo} alt="alipay logo" height={25} />
          <p>Card/Apple Pay</p>
        </div>
        <div className="col-span-1 row-span-1 text-base">
          <p className="font-bold">Acceptance</p>
          <p className="font-normal">How widely is it accepted?</p>
        </div>
        <div className="col-span-1 row-span-1 text-sm font-normal text-gray-100 flex flex-col items-center gap-2">
          <div className="flex justify-center items-center gap-2">
            <Image src={star_icon} alt="star icon" height={20} />
            <Image src={star_icon} alt="star icon" height={20} />
            <Image src={star_icon} alt="star icon" height={20} />
          </div>
          <p>
            Nearly every vendor, from street stalls to public transport, accepts
            mobile payments (Alipay & WeChat Pay)
          </p>
        </div>
        <div className="col-span-1 row-span-1 text-sm font-normal text-gray-100 flex flex-col items-center gap-2">
          <div className="flex justify-center items-center gap-2">
            <Image src={star_icon} alt="star icon" height={20} />
            <Image src={star_icon} alt="star icon" height={20} />
            <Image src={star_empty} alt="star empty" height={20} />
          </div>
          <p>
            Commonly accepted at shops, but rarely works for machines and
            self-service checkouts, which usually only take digital payments
          </p>
        </div>
        <div className="col-span-1 row-span-1 text-sm font-normal text-gray-100 flex flex-col items-center gap-2">
          <div className="flex justify-center items-center gap-2">
            <Image src={star_icon} alt="star icon" height={20} />
            <Image src={star_empty} alt="star empty" height={20} />
            <Image src={star_empty} alt="star empty" height={20} />
          </div>
          <p>
            Only accepted at high-end hotels, restaurants, and select locations
            with POS machines
          </p>
        </div>
        <div className="col-span-1 row-span-1 text-base">
          <p className="font-bold">Reliability</p>
          <p className="font-normal">How trouble-free it is to use?</p>
        </div>
        <div className="col-span-1 row-span-1 text-sm font-normal text-gray-100 flex flex-col items-center gap-2">
          <div className="flex justify-center items-center gap-2">
            <Image src={star_icon} alt="star icon" height={20} />
            <Image src={star_icon} alt="star icon" height={20} />
            <Image src={star_icon} alt="star icon" height={20} />
          </div>
          <p>
            Works smoothly once set up properly - check setup guide for tips
          </p>
        </div>
        <div className="col-span-1 row-span-1 text-sm font-normal text-gray-100 flex flex-col items-center gap-2">
          <div className="flex justify-center items-center gap-2">
            <Image src={star_icon} alt="star icon" height={20} />
            <Image src={star_icon} alt="star icon" height={20} />
            <Image src={star_empty} alt="star empty" height={20} />
          </div>
          <p>
            Expect some hassle with change - most vendors rarely handle cash
            nowadays
          </p>
        </div>
        <div className="col-span-1 row-span-1 text-sm font-normal text-gray-100 flex flex-col items-center gap-2">
          <div className="flex justify-center items-center gap-2">
            <Image src={star_icon} alt="star icon" height={20} />
            <Image src={star_icon} alt="star icon" height={20} />
            <Image src={star_empty} alt="star empty" height={20} />
          </div>
          <p>
            Sometimes problematic —foreign cards could face issues like declined
            transactions and security checks
          </p>
        </div>
      </div>
      <div className="grid md:hidden grid-cols-[1fr_2fr] grid-rows-[5rem_1fr_1fr] gap-y-6 gap-x-6 w-full justify-items-center items-center text-center">
        <div className="col-span-2 row-span-1 text-xs text-center pt-[3rem]">
          <p className="font-bold">Acceptance</p>
          <p className="font-normal">How widely is it accepted?</p>
        </div>
        <div className="col-span-1 row-span-1 text-xs font-bold flex flex-col items-center gap-2">
          <div className="flex justify-center items-center gap-4">
            <Image src={alipay_logo} alt="alipay logo" height={20} />
            <Image src={wechatPay_logo} alt="wechat pay logo" height={20} />
          </div>
          <p>Digital Wallet</p>
        </div>
        <div className="col-span-1 row-span-1 text-xs font-normal text-gray-100 flex flex-col items-center gap-2">
          <div className="flex justify-center items-center gap-2">
            <Image src={star_icon} alt="star icon" height={20} />
            <Image src={star_icon} alt="star icon" height={20} />
            <Image src={star_icon} alt="star icon" height={20} />
          </div>
          <p>
            Nearly every vendor, from street stalls to public transport, accepts
            mobile payments (Alipay & WeChat Pay)
          </p>
        </div>
        <div className="col-span-1 row-span-1 text-xs font-bold flex flex-col items-center gap-2">
          <Image src={cash_logo} alt="alipay logo" height={20} />
          <p>Cash Payment</p>
        </div>
        <div className="col-span-1 row-span-1 text-xs font-normal text-gray-100 flex flex-col items-center gap-2">
          <div className="flex justify-center items-center gap-2">
            <Image src={star_icon} alt="star icon" height={20} />
            <Image src={star_icon} alt="star icon" height={20} />
            <Image src={star_empty} alt="star empty" height={20} />
          </div>
          <p>
            Commonly accepted at shops, but rarely works for machines and
            self-service checkouts, which usually only take digital payments
          </p>
        </div>
        <div className="col-span-1 row-span-1 text-xs font-bold flex flex-col items-center gap-2">
          <Image src={card_logo} alt="alipay logo" height={20} />
          <p>Card/Apple Pay</p>
        </div>
        <div className="col-span-1 row-span-1 text-xs font-normal text-gray-100 flex flex-col items-center gap-2">
          <div className="flex justify-center items-center gap-2">
            <Image src={star_icon} alt="star icon" height={20} />
            <Image src={star_empty} alt="star empty" height={20} />
            <Image src={star_empty} alt="star empty" height={20} />
          </div>
          <p>
            Only accepted at high-end hotels, restaurants, and select locations
            with POS machines
          </p>
        </div>
      </div>
      <div className="mt-[1.5rem] grid md:hidden grid-cols-[1fr_2fr] grid-rows-[5rem_1fr_1fr] gap-y-6 gap-x-6 w-full justify-items-center items-center text-center">
        <div className="col-span-2 row-span-1 text-xs text-center pt-[3rem]">
          <p className="font-bold">Reliability</p>
          <p className="font-normal">How trouble-free it is to use?</p>
        </div>
        <div className="col-span-1 row-span-1 text-xs font-bold flex flex-col items-center gap-2">
          <div className="flex justify-center items-center gap-4">
            <Image src={alipay_logo} alt="alipay logo" height={20} />
            <Image src={wechatPay_logo} alt="wechat pay logo" height={20} />
          </div>
          <p>Digital Wallet</p>
        </div>
        <div className="col-span-1 row-span-1 text-xs font-normal text-gray-100 flex flex-col items-center gap-2">
          <div className="flex justify-center items-center gap-2">
            <Image src={star_icon} alt="star icon" height={20} />
            <Image src={star_icon} alt="star icon" height={20} />
            <Image src={star_icon} alt="star icon" height={20} />
          </div>
          <p>
            Works smoothly once set up properly - check setup guide for tips
          </p>
        </div>
        <div className="col-span-1 row-span-1 text-xs font-bold flex flex-col items-center gap-2">
          <Image src={cash_logo} alt="alipay logo" height={20} />
          <p>Cash Payment</p>
        </div>
        <div className="col-span-1 row-span-1 text-xs font-normal text-gray-100 flex flex-col items-center gap-2">
          <div className="flex justify-center items-center gap-2">
            <Image src={star_icon} alt="star icon" height={20} />
            <Image src={star_icon} alt="star icon" height={20} />
            <Image src={star_empty} alt="star empty" height={20} />
          </div>
          <p>
            Expect some hassle with change - most vendors rarely handle cash
            nowadays
          </p>
        </div>
        <div className="col-span-1 row-span-1 text-xs font-bold flex flex-col items-center gap-2">
          <Image src={card_logo} alt="alipay logo" height={20} />
          <p>Card/Apple Pay</p>
        </div>
        <div className="col-span-1 row-span-1 text-xs font-normal text-gray-100 flex flex-col items-center gap-2">
          <div className="flex justify-center items-center gap-2">
            <Image src={star_icon} alt="star icon" height={20} />
            <Image src={star_icon} alt="star icon" height={20} />
            <Image src={star_empty} alt="star empty" height={20} />
          </div>
          <p>
            Sometimes problematic — foreign cards could face issues like
            declined transactions and security checks. Apple Pay is normally not
            accepted.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
