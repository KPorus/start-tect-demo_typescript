import Link from "next/link";
import dynamic from 'next/dynamic';

const HiOutlineInboxIn = dynamic(() => import('react-icons/hi').then((module) => module.HiOutlineInboxIn))
const AiOutlineSearch = dynamic(() => import('react-icons/ai').then((module) => module.AiOutlineSearch));
const MdOutlineElectricBolt = dynamic(() => import('react-icons/md').then((module) => module.MdOutlineElectricBolt))
const MdOutlineManageAccounts = dynamic(() => import('react-icons/md').then((module) => module.MdOutlineManageAccounts))
import Image from "next/image";

const Navber = () =>
{
    return (
        <div className='bg-[#081621]'>
            <div className=' mx-auto top  flex justify-between items-center'>
                <div className='container mx-auto flex justify-center items-center'>
                    <Link
                        href={"/"}
                        aria-label='Start tech'
                        className='mx-4 py-5  md:block'>
                        <Image
                            src='https://seeklogo.com/images/S/startech-logo-0BF29AE753-seeklogo.com.png'
                            alt='Logo'
                            width={117}
                            height={92}
                            style={{
                                width: "6rem",
                                height: "100%",
                            }}
                            priority={true}
                        />
                    </Link>

                    <div className='xl:block hidden  h-[42px] flex-1 rounded-sm ml-5 relative '>
                        <input
                            className=' w-full rounded-sm h-full p-[15px] outline-none'
                            placeholder='Search'
                            type='text'
                        />

                        <div className='absolute right-0 top-2 cursor-pointer  text-[black] mr-4 text-2xl'><AiOutlineSearch /></div>
                    </div>

                    <div className='flex justify-center ml-auto'>
                        <div className='xm:mx-2 mx-3 flex items-center'>
                            <Link href={"/Products"} aria-label='View all products'>
                                <span className={'cursor-pointer text-[#ef4a23] mr-4 lg:text-2xl text-3xl'}>
                                    <HiOutlineInboxIn />
                                </span>
                            </Link>

                            <Link href={"/Products"}>
                                {" "}
                                <div>
                                    <h3 className='text-[#fff] text-xm hidden sm:block'>
                                        Offers
                                    </h3>
                                    <p className='text-[#acabab] text-sm hidden md:block'>
                                        Latest Offers
                                    </p>
                                </div>
                            </Link>
                        </div>

                        <div className='mx-5 flex items-center'>
                            <Link href={"#productComponent"} aria-label='View all products'>
                                <span className='text-[#ef4a23] mr-4 text-3xl sm:text-3xl'>
                                <MdOutlineElectricBolt  />
                                </span>
                            </Link>
                            <Link href={"#productComponent"}>
                                <div>
                                    <h3 className='text-[#fff] text-xm hidden sm:block'>
                                        Desktop Deal
                                    </h3>
                                    <p className='text-[#acabab] text-sm hidden md:block'>
                                        Special Deals
                                    </p>
                                </div>
                            </Link>
                        </div>

                        <div className='mx-5 flex items-center'>
                            <span className='text-[#ef4a23] mr-4 text-3xl'>
                            <MdOutlineManageAccounts />
                            </span>
                            <div>
                                <h3 className='text-[#fff] text-xm hidden sm:block'>Account</h3>
                                <p className='text-[#acabab] text-sm hidden md:block'>
                                    <Link
                                        href={"/register"}
                                        className='py-1 cursor-pointer hover:text-[#ef4a23]'>
                                        Register{" "}
                                    </Link>
                                    or
                                    <Link
                                        href={"/login"}
                                        className='py-1 cursor-pointer hover:text-[#ef4a23]'>
                                        {" "}
                                        Login
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navber;