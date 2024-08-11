import React, { useState } from 'react'
import ArchiveCard from './ArchiveCard'
import { motion } from 'framer-motion';

const Archive = () => {
    const [showMore, setShowMore] = useState(false);
    return (
        <div className='max-w-contentContainer mx-auto px-4 py-24'>
            <div className='w-full flex flex-col items-center'>
                <h2 className='text-3xl font-titleFont font-semibold'>Other Noteworthy Projects</h2>
                <p className='text-sm font-titleFont text-textGreen'>View the archive</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10'>
                <ArchiveCard
                    title="Instello"
                    des="A social media platform where you can share your photos and connect with friends and family. Just like Instagram, you can share your life with others through pictures and short captions. "
                    listItem={["Python", "Django", "Javascript"]}
                    link="https://github.com/itsAnkitpy/Instello"
                />

                <ArchiveCard
                    title="Boighor"
                    des="A place for all book worms to jump in and just order their favourite books of their favourite authors."
                    listItem={["Python", "Django", "Javascript"]}
                    link="https://github.com/itsAnkitpy/Boighor"
                />

                <ArchiveCard
                    title="Streamit"
                    des="Streamit is a simple OTT platform project with functionalities of creating multiple accounts and watching your favourite shows and movies.  "
                    listItem={["Python", "Django", "Javascript"]}
                    link="https://github.com/itsAnkitpy/Streamit"
                />

                <ArchiveCard
                    title="Clique"
                    des="Clique is an online platform for coders to learn and discuss different areas of programming in an interactive interface through online chatting. "
                    listItem={["Python", "Django", "Javascript"]}
                    link="https://github.com/itsAnkitpy/Clique"
                />

                <ArchiveCard
                    title="Laravel Blog"
                    des="It is a laravel blog with all CRUD features where one can share their ideas with others."
                    listItem={["PHP", "Laravel", "Javascript", "Bootstrap", "HTML/CSS"]}
                    link="https://github.com/itsAnkitpy/laravel_blog"
                />

                <ArchiveCard
                    title="Infraup"
                    des="This is a landing page of InfraUp which is a Civil and Structural Engineering consultancy in Chandigarh. "
                    listItem={["HTML", "CSS", "Javascript"]}
                    link="https://github.com/itsAnkitpy/infraup"
                />

                {showMore && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                        >
                            <ArchiveCard
                                title="Django CRM"
                                des="This is a basic Django CRM with all the CRUD functionalities related to product based service. "
                                listItem={["Python", "Django", "Javascript"]}
                                link="https://github.com/itsAnkitpy/django_crm"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <ArchiveCard
                                title="Space Invaders"
                                des="Space Invaders was the first fixed shooter and set the template for the shoot 'em up genre. The goal is to defeat wave after wave of descending aliens with a horizontally moving laser to earn as many points as possible. "
                                listItem={["Python", "Django", "Javascript"]}
                                link="https://github.com/itsAnkitpy/Space-Invaders"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            <ArchiveCard
                                title="Type Racer"
                                des="Welcome to Type Racer, the exciting single player typing game that puts your typing skills to the test! In this game, you'll be challenged to type out a variety of phrases and sentences as quickly and accurately as possible. "
                                listItem={["Python", "Django", "Javascript"]}
                                link="https://github.com/itsAnkitpy/Type-racer"
                            />
                        </motion.div>

                        {/* <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <ArchiveCard
                                title="Streamit"
                                des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad corporis laboriosam doloremque delectus accusamus
                        sed voluptate, ab iusto nesciunt architecto"
                                listItem={["Python", "Django", "Javascript"]}
                                link="https://github.com/itsAnkitpy/Instello"
                            />
                        </motion.div> */}

                        {/* <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <ArchiveCard
                                title="Streamit"
                                des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad corporis laboriosam doloremque delectus accusamus
                        sed voluptate, ab iusto nesciunt architecto"
                                listItem={["Python", "Django", "Javascript"]}
                                link="https://github.com/itsAnkitpy/Instello"
                            />
                        </motion.div> */}

                        {/* <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            <ArchiveCard
                                title="Streamit"
                                des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad corporis laboriosam doloremque delectus accusamus
                        sed voluptate, ab iusto nesciunt architecto"
                                listItem={["Python", "Django", "Javascript"]}
                                link="https://github.com/itsAnkitpy/Instello"
                            />
                        </motion.div> */}
                    </>
                )
                }
            </div>

            <div className='mt-12 flex items-center justify-center'>
                {
                    showMore ?
                        <button
                            onClick={() => setShowMore(false)}
                            className='w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen
                hover:bg-hoverColor duration-300'>
                            Show Less
                        </button>
                         :
                        <button
                            onClick={() => setShowMore(true)}
                            className='w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen
                hover:bg-hoverColor duration-300'>
                            Show More
                        </button>
                }
            </div>

        </div>
    )
}

export default Archive