import React from "react";
import Image from "next/image";
import ntcHero from "../../public/static/ntc-hero.jpeg";
import ntcHeroSm from "../../public/static/ntc-hero-sm.jpeg";
import workout from "../../public/static/home-workouts.jpeg";
import workoutSm from "../../public/static/home-workouts-sm.jpeg";
import bells from "../../public/static/bells.jpeg";
import bellsSm from "../../public/static/bells-sm.png";
import grid1 from "../../public/static/grid-1.jpeg";
import grid2 from "../../public/static/grid-2.jpeg";
import grid3 from "../../public/static/grid-3.jpeg";
import flexible from "../../public/static/flexible.jpeg";
import flexibleSm from "../../public/static/flexible-sm.png";
import achieve from "../../public/static/achieve.jpeg";
import achieveSm from "../../public/static/achieve-sm.png";

const NikeTrainingApp = () => {
  return (
    <div>
      <Image src={ntcHeroSm} alt='/' className='md:hidden' />
      <Image src={ntcHero} alt='/' className='hidden md:block' />
      <div className='pb-20 pt-16 px-6 lg:px-16 text-[#111]'>
        <div className='pb-12 sm:px-24 md:px-32  lg:pl-48 xl:pr-80 2xl:pr-[50%]'>
          <h3 className='text-3xl md:text-4xl pt-12 font-semibold'>
            Nike Training Club
          </h3>
          <p className='py-4 md:text-lg  text-[black]/80'>
            Reach your fitness goals with the Nike Training Club App (NTC). With
            access to 200+ free workouts and targeted training programmes, the
            NTC App will support you every step of the way. From invigorating
            yoga classes to bodyweight sessions with and without equipment,
            you'll find the right workout for you. Follow our Nike Master
            Trainers through varied classes, ranging from 5–50 minutes. Do them
            at home, in the gym or outdoors – whenever and wherever you want.
            Plus, our free video library is constantly growing, so expect new
            videos to flow in. No matter what fitness level you're at, NTC will
            give you the tools you need to succeed.
          </p>
          <div className='flex gap-3 pt-5 items-center'>
            <p className='rounded-full text-sm md:text-base bg-black text-white py-2 px-4 hover:bg-black/60 cursor-pointer'>
              Download for IOS
            </p>
            <p className='rounded-full text-sm md:text-base bg-black text-white py-2 px-4 hover:bg-black/60 cursor-pointer'>
              Download for Android
            </p>
          </div>
        </div>
        <div>
          <Image src={workoutSm} alt='/' className='md:hidden' />
          <Image
            src={workout}
            alt='/'
            className='hidden md:block md:px-32 lg:px-48'
          />
        </div>
        <div className='pb-12 pt-8 sm:px-24 md:px-32  lg:pl-48 xl:pr-80 2xl:pr-[50%]'>
          <h3 className='text-3xl md:text-4xl pt-12 font-semibold'>
            Nike Training Club
          </h3>
          <h5 className='text-lg font-semibold pt-4'>
            Workout From Home Routines
          </h5>
          <p className='py-4 md:text-lg  text-[black]/80'>
            We're taking home workouts to the next level. With NTC, you can
            move, sweat and get stronger right from your living room. Go all in
            by working out with NTC Live, exploring our library of free workouts
            and accessing expert advice. Plus, you'll be joining a whole
            community of other home athletes.
          </p>
          <h5 className='text-lg font-semibold pt-4'>
            Your Go-To Gym Programme App
          </h5>
          <p className='py-4 md:text-lg  text-[black]/80'>
            If the gym is where you like to sweat, you need an app that keeps
            you feeling challenged. With access to training plans and expert
            help, you can work on your fitness and strength knowing you're in
            good hands. NTC features hours of workouts, from cardio to targeted
            strength training – with the possibility to leverage full gym
            equipment when it's available to you. It's not just a tracker, it's
            your new favourite coach.
          </p>
        </div>
        <Image src={bellsSm} alt='/' className='md:hidden' />
        <Image src={bells} alt='/' className='hidden md:block' />
        <div
          className='pb-12 pt-8 sm:px-24 md:px-32  lg:pl-48 xl:pr-80 2xl:pr-[50%]
        '
        >
          <h3 className='text-3xl md:text-4xl pt-12 font-semibold'>
            Why Nike Training Club?
          </h3>
          <p className='py-4 md:text-lg  text-[black]/80'>
            With your own Nike personal trainer in your pocket, you can keep
            pushing harder. Whether you're just getting started, or you want to
            take your fitness to the next level, NTC will help you get there.
          </p>
        </div>
        <div className='grid pb-12 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='text-xl'>
            <Image src={grid1} alt='/' />
            <h4 className='py-6 font-semibold text-2xl'>Plan your workouts:</h4>
            <div className='md:hidden'>
              <p>Create your ideal training</p>
              <p>schedule.</p>
            </div>
            <p className='hidden md:block'>
              Use the app's workout planner (currently only available for iOS)
              to organise your ideal training schedule. From single sessions to
              multi-week programmes, you can personalise your training to suit
              your lifestyle.
            </p>
          </div>
          <div className='text-xl'>
            <Image src={grid2} alt='/' />
            <h4 className='py-6 font-semibold text-2xl'>Train Hard:</h4>
            <div className='md:hidden'>
              <p>Improve fitness and strength</p>
              <p>with video workouts.</p>
            </div>
            <p className='hidden md:block'>
              NTC is packed with video workouts, making it super easy for you to
              get your training in. Our videos feature Master Trainers, who'll
              keep you focused and help you perfect your form. You could choose
              to focus on particular muscle groups, or work on improving overall
              endurance, mobility or strength – the choice is yours.
            </p>
          </div>
          <div className='text-xl'>
            <Image src={grid3} alt='/' />
            <h4 className='py-6 font-semibold text-2xl'>Stay Motivated:</h4>
            <div className='md:hidden'>
              <p>Tracking your progress and</p>
              <p>celebrate achievements.</p>
            </div>
            <p className='hidden md:block'>
              Celebrate your hard work along the way with trophies and
              milestones. Our Activity tab records your achievements, so you
              stay motivated to train consistently.
            </p>
          </div>
        </div>
        <div>
          <Image src={flexibleSm} alt='/' className='md:hidden' />
          <Image
            src={flexible}
            alt='/'
            className='hidden md:block md:px-32 lg:px-48 w-full'
          />
        </div>
        <div className='pb-12 pt-8 sm:px-24 md:px-32  lg:pl-48 xl:pr-80 2xl:pr-[50%]'>
          <h3 className='text-3xl md:text-4xl pt-12 font-semibold'>
            Flexible Training Programmes Tailored to You
          </h3>
          <p className='py-4 md:text-lg  text-[black]/80'>
            Start training with a personal plan that guides you while adjusting
            to your progress, schedule and other activities. With NTC, you get
            access to 4–6-week training plans. Whether you use a full gym or are
            training from the comfort of your home, there's a routine that'll
            fit you and your schedule so that you can reach your goals.
          </p>
          <p className='py-4 md:text-lg  text-[black]/80'>
            Our multi-week programmes don't just guide you through regular
            workouts, they include advice on wellness and nutrition too.* No
            matter what kind of athlete you are, you'll get everything you need
            to improve your fitness and stay on track. Each programme has been
            designed for specific results, so if you're hoping to build
            strength, get leaner or gain more power, you'll know what to expect.
            Work out with NTC at home or use it as a weight-training app in the
            gym to help you make the most of your equipment.
          </p>
        </div>
        <Image src={achieveSm} alt='/' className='md:hidden' />
        <Image src={achieve} alt='/' className='hidden md:block' />
        <div>
          <h3 className='text-3xl md:text-4xl pt-12 font-semibold'>
            NTC App FAQS
          </h3>
          <p className='py-4 md:text-lg  text-[black]/80'>
            Find answers to some of the most common questions about Nike
            Training Club below:
          </p>
          <p className='py-4 md:text-lg font-semibold  '>
            Why is my NTC workout not syncing with my device?
          </p>
          <p className='py-4 md:text-lg  text-[black]/80'>
            If you're having issues with your workouts syncing, contact us for
            advice.
          </p>
          <p className='py-4 md:text-lg font-semibold  '>
            Why is my NTC App not working?
          </p>
          <p className='py-4 md:text-lg  text-[black]/80'>
            If your NTC App isn't working, contact us for help.
          </p>
          <p className='py-4 md:text-lg font-semibold  '>
            What equipment do I need for NTC workouts?
          </p>
          <p className='py-4 md:text-lg  text-[black]/80'>
            NTC features a whole range of workouts, and you don't need equipment
            for all of them. Some are bodyweight-only sessions, while others are
            best performed in a gym. Check out the workout video overview page
            to find out what kind of equipment you'll need.
          </p>
          <p className='py-4 md:text-lg font-semibold  '>
            How do I log in to my NTC App?
          </p>
          <p className='py-4 md:text-lg  text-[black]/80'>
            To log in to your NTC App, download and open the app on your device.
            Select "log in", then enter your email address and password to
            access your profile.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NikeTrainingApp;
