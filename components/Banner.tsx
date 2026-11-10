import Link from 'next/link';
import { motion } from 'framer-motion';

const isolationModels = [
    { system: 'AssetLane', slug: 'assetlane', model: 'Row-level', since: 2025 },
    { system: 'LinkAbode', slug: 'linkabode', model: 'Schema-per-tenant', since: 2024 },
    { system: 'LeadCheck', slug: 'leadcheck', model: 'Database-per-tenant', since: 2024 },
];

const fadeUp = (delay: number) => ({
    initial: { y: 10, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5, delay },
});

const Banner = () => {
    return (
        <section
            id='home'
            className='max-w-contentContainer mx-auto py-10 mdl:py-24 mdl:px-10 xl:px-4 grid lgl:grid-cols-[1.2fr_1fr] gap-10 lgl:gap-12 lgl:items-center'
        >
            {/* Left: the claim and the actions. Right: the proof. On a phone the proof drops below. */}
            <div className='flex flex-col gap-4 lgl:gap-6'>
            <motion.p {...fadeUp(0.3)} className='font-titleFont text-sm tracking-[0.2em] uppercase text-accent'>
                Product engineer
            </motion.p>

            <motion.h1
                {...fadeUp(0.4)}
                className='text-4xl lgl:text-5xl font-titleFont font-extrabold text-textLight leading-tight'
            >
                I have shipped all three tenant isolation models to production.
            </motion.h1>

            <motion.p {...fadeUp(0.5)} className='text-base md:max-w-[650px] text-textDark font-medium'>
                Most engineers pick one way of keeping one customer&apos;s data away from another&apos;s and stay
                there. I have run all three in live systems.
            </motion.p>

            <motion.p {...fadeUp(0.6)} className='text-base md:max-w-[650px] text-textDark font-medium'>
                <span className='text-textLight'>Most recent:</span>{' '}
                <Link
                    href='/projects/legendaire-dms'
                    className='underline decoration-accent/40 underline-offset-4 hover:text-accent duration-300'
                >
                    Rebuilt a Logistics Company&apos;s live delivery system
                </Link>{' '}
                from .NET and AngularJS to NestJS and React in five weeks.
            </motion.p>

            <motion.div {...fadeUp(0.7)} className='flex flex-wrap gap-4 mt-2'>
                <a href='#project'>
                    <button className='w-44 h-12 text-sm font-titleFont bg-accent text-bodyColor rounded-md
                        tracking-wide hover:bg-accent/90 duration-300 font-semibold'>
                        View My Work
                    </button>
                </a>
                <a href='#contact'>
                    <button className='w-44 h-12 text-sm font-titleFont border border-accent rounded-md text-accent
                        tracking-wide hover:bg-hoverColor duration-300'>
                        Get in Touch
                    </button>
                </a>
            </motion.div>
            </div>

            <motion.div
                {...fadeUp(0.8)}
                className='w-full overflow-x-auto rounded-lg border border-[#233554] bg-[#112240]/60'
            >
                <table className='w-full text-sm text-left'>
                    <thead className='font-titleFont text-xs uppercase tracking-wider text-textDark'>
                        <tr className='border-b border-[#233554]'>
                            <th scope='col' className='px-4 py-3 font-medium'>System</th>
                            <th scope='col' className='px-4 py-3 font-medium'>Isolation</th>
                            <th scope='col' className='px-4 py-3 font-medium text-right'>Live since</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isolationModels.map((row) => (
                            <tr key={row.slug} className='border-b border-[#233554] last:border-0'>
                                <td className='px-4 py-3'>
                                    <Link
                                        href={`/projects/${row.slug}`}
                                        className='text-textLight hover:text-accent duration-300'
                                    >
                                        {row.system}
                                    </Link>
                                </td>
                                <td className='px-4 py-3 text-accent whitespace-nowrap'>{row.model}</td>
                                <td className='px-4 py-3 text-right tabular-nums text-textDark'>{row.since}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </motion.div>
        </section>
    );
};

export default Banner;
