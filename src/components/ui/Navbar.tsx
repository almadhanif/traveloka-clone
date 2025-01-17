'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import PaddingContainer from '../containers/PaddingContainer';
import ListItem from './ListItem';

import { UserIcon } from '@heroicons/react/16/solid';
import { QuestionMarkCircleIcon } from '@heroicons/react/16/solid';
import { ChatBubbleLeftEllipsisIcon } from '@heroicons/react/16/solid';
import { PaperAirplaneIcon } from '@heroicons/react/16/solid';
import { GlobeAltIcon } from '@heroicons/react/16/solid';

import TravelokaImgWhite from '@/assets/icon/traveloka-img-white.svg';
import TravelokaImgBlue from '@/assets/icon/traveloka-img-blue.svg';
import Shape1 from '@/assets/icon/navbar bg.svg';
import Button from './Button';
import AuthModal from '../modals/AuthModal';
import Link from 'next/link';

import { useTheme } from '@/contex/ThemeContext';

type SubItem = {
  icon?: React.ReactElement | string;
  label: string;
  link: string;
};

type MultiSubItem = {
  label: string;
  subItem: SubItem[];
};

type MenuItem = {
  type: 'link' | 'dropdown';
  icon?: string;
  label: string;
  link?: string;
  multiSubItems?: MultiSubItem[];
  subItems?: SubItem[];
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );
  const [activeLang, setActiveLang] = useState<string>('ID');
  const [activeCurrency, setActiveCurrency] = useState<string>('IDR');
  const { theme } = useTheme();

  const handleToggleDropdown = (index: number) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const listItems1: MenuItem[] = [
    {
      type: 'dropdown',
      icon: '',
      label: 'EN | IDR',
      multiSubItems: [
        {
          label: 'Country & Language',
          subItem: [
            {
              icon: 'ID',
              label: 'Indonesia (Bahasa Indonesia)',
              link: '',
            },
            {
              icon: <GlobeAltIcon className='w-5 h-5' />,
              label: 'Global (English)',
              link: '',
            },
            {
              icon: 'MY',
              label: 'Malaysia (English)',
              link: '',
            },
            {
              icon: 'SG',
              label: 'Singapore (English)',
              link: '',
            },
            {
              icon: 'JP',
              label: 'Japan (English)',
              link: '',
            },
          ],
        },
        {
          label: 'Currency',
          subItem: [
            {
              icon: 'IDR',
              label: 'Indonesia Rupiah',
              link: '',
            },
            {
              icon: 'USD',
              label: 'US Dollar',
              link: '',
            },
            {
              icon: 'EUR',
              label: 'Euro',
              link: '',
            },
            {
              icon: 'HKD',
              label: 'Hong Kong Dollar',
              link: '',
            },
          ],
        },
      ],
    },
    { type: 'link', icon: '', label: 'Year End Sale', link: '/#' },
    {
      type: 'dropdown',
      label: 'Support',
      subItems: [
        {
          icon: (
            <QuestionMarkCircleIcon
              className='w-5 h-5'
              color='white'
              stroke='black'
            />
          ),
          label: 'Help Center',
          link: '/#',
        },
        {
          icon: (
            <ChatBubbleLeftEllipsisIcon
              className='w-5 h-5'
              color='white'
              stroke='black'
            />
          ),
          label: 'Contact Us',
          link: '/#',
        },
      ],
    },
    { type: 'link', label: 'Partnership', link: '/#' },
    { type: 'link', label: 'For Corporate', link: '/#' },
    { type: 'link', label: 'Saved', link: '/#' },
    { type: 'link', label: 'Bookings', link: '/#' },
  ];

  const listItems2: MenuItem[] = [
    { type: 'link', label: 'Hotels', link: '/#' },
    { type: 'link', label: 'Flights', link: '/#' },
    { type: 'link', label: 'Trains', link: '/#' },
    { type: 'link', label: 'Bus & Travels', link: '/#' },
    { type: 'link', label: 'Airport Transfer', link: '/#' },
    { type: 'link', label: 'Car Rental', link: '/#' },
    { type: 'link', label: 'Things To Do', link: '/#' },
    {
      type: 'dropdown',
      label: 'More',
      subItems: [
        {
          icon: <PaperAirplaneIcon className='w-5 h-5' />,
          label: 'Flight + Hotel',
          link: '/#',
        },
        {
          icon: <PaperAirplaneIcon className='w-5 h-5' />,
          label: 'Travel Insurance',
          link: '/#',
        },
        {
          icon: <PaperAirplaneIcon className='w-5 h-5' />,
          label: 'International Data Plans',
          link: '/#',
        },
        {
          icon: <PaperAirplaneIcon className='w-5 h-5' />,
          label: 'TPayLater',
          link: '/#',
        },
        {
          icon: <PaperAirplaneIcon className='w-5 h-5' />,
          label: 'Travel Guides',
          link: '/#',
        },
        {
          icon: <PaperAirplaneIcon className='w-5 h-5' />,
          label: 'Gift Voucher',
          link: '/#',
        },
        {
          icon: <PaperAirplaneIcon className='w-5 h-5' />,
          label: 'Cruises',
          link: '/#',
        },
        {
          icon: <PaperAirplaneIcon className='w-5 h-5' />,
          label: 'Traveloka Mandiri Card',
          link: '/#',
        },
      ],
    },
  ];

  return (
    <div
      className={`sticky top-0 w-full pt-2 px-10 z-10 ${
        isScrolled || theme === 'dark'
          ? 'bg-white'
          : 'bg-gradient-to-b from-black/40 from-10% via-transparent via-60% to-transparent to-40%'
      }`}
    >
      <PaddingContainer>
        {/* nav list 1 */}
        <div className='w-full flex justify-between items-center gap-x-10 pb-2'>
          {/* icon */}
          <div className='w-[190px] z-20'>
            <Link href={'/'}>
              <Image
                src={
                  isScrolled || theme === 'dark'
                    ? TravelokaImgBlue
                    : TravelokaImgWhite
                }
                alt='traveloka-img'
                width={500}
                height={500}
                className='w-full h-full object-cover'
              />
            </Link>
          </div>

          {/* list */}
          <ul className='w-full flex justify-evenly items-center'>
            {listItems1.map((item, index) => (
              <ListItem
                key={index}
                item={item}
                color={isScrolled || theme === 'dark' ? 'black' : 'white'}
                isOpen={openDropdownIndex === index}
                onToggle={() => handleToggleDropdown(index)}
                activeLang={activeLang}
                setActiveLang={setActiveLang}
                activeCurrency={activeCurrency}
                setActiveCurrency={setActiveCurrency}
              />
            ))}
          </ul>

          {/* authButton */}
          <div className='flex space-x-3 text-white w-auto'>
            <Button
              text='Log in'
              variant={
                isScrolled || theme === 'dark' ? 'outlineBlack' : 'outlineWhite'
              }
              icon={<UserIcon className={`w-4 h-4 transition-transform`} />}
              onClick={() => setModalOpen(true)}
            />
            <Button text='Register' variant='solid' />
          </div>
        </div>

        {/* nav list 2 */}
        <div className='py-2'>
          {/* list */}
          <ul className='w-full flex justify-start items-center gap-x-2 font-semibold'>
            {listItems2.map((item, index) => (
              <ListItem
                key={index}
                item={item}
                color={isScrolled || theme === 'dark' ? 'black' : 'white'}
                isOpen={openDropdownIndex === index}
                onToggle={() => handleToggleDropdown(index)}
              />
            ))}
          </ul>
        </div>
      </PaddingContainer>

      {theme === 'light' && !isScrolled && (
        <div className='absolute top-0 -left-12'>
          <Image src={Shape1} alt='bg-shape' className='w-56 object-cover' />
        </div>
      )}

      <AuthModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default Navbar;
