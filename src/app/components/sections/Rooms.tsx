'use client';
import React, { useState } from 'react';
import RoomModal from './RoomModal';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

interface Room {
  id: number;
  name: string;
  shortDesc: string;
  description: string;
  price: string;
  size: string;
  capacity: string;
  images: string[];
  amenities: string[];
}

const rooms: Room[] = [
  {
    id: 1,
    name: 'Superior Szoba',
    shortDesc: 'Elegáns kényelem két főre',
    description: 'Tágas, luxus felszereltségű szobáink tökéletes választás pároknak. Modern fürdőszoba, king size ágy, és panorámás kilátás teszi különlegessé.',
    price: '45.000 Ft / éj',
    size: '32m²',
    capacity: '2 fő',
    images: [
      '/Room1/Lakatos_Banjol-033.jpg',
      '/Room1/Lakatos_Banjol-034.jpg',
      '/Room1/Lakatos_Banjol-035.jpg',
      '/Room1/Lakatos_Banjol-036.jpg',
      '/Room1/Lakatos_Banjol-037.jpg',
      '/Room1/Lakatos_Banjol-038.jpg',
      '/Room1/Lakatos_Banjol-039.jpg',
      '/Room1/Lakatos_Banjol-040.jpg',
      '/Room1/Lakatos_Banjol-041.jpg',
      '/Room1/Lakatos_Banjol-042.jpg',
      '/Room1/Lakatos_Banjol-043.jpg',
      '/Room1/Lakatos_Banjol-044.jpg',
      '/Room1/Lakatos_Banjol-045.jpg',
      '/Room1/Lakatos_Banjol-046.jpg',
      '/Room1/Lakatos_Banjol-047.jpg',
      '/Room1/Lakatos_Banjol-048.jpg',
      '/Room1/Lakatos_Banjol-049.jpg',
      '/Room1/Lakatos_Banjol-050.jpg',
      '/Room1/Lakatos_Banjol-051.jpg',
      '/Room1/Lakatos_Banjol-052.jpg',
      '/Room1/Lakatos_Banjol-053.jpg',
      '/Room1/Lakatos_Banjol-054.jpg',
      '/Room1/Lakatos_Banjol-055.jpg',
      '/Room1/Lakatos_Banjol-056.jpg',
      '/Room1/Lakatos_Banjol-057.jpg',
      '/Room1/Lakatos_Banjol-058.jpg',
      '/Room1/Lakatos_Banjol-059.jpg',
      '/Room1/Lakatos_Banjol-060.jpg',
      '/Room1/Lakatos_Banjol-061.jpg',
      '/Room1/Lakatos_Banjol-062.jpg',
      '/Room1/Lakatos_Banjol-063.jpg',
      '/Room1/Lakatos_Banjol-064.jpg',
      '/Room1/Lakatos_Banjol-065.jpg'
    ],
    amenities: ['King size ágy', 'Légkondicionáló', 'Mini bár', 'Wifi', 'Smart TV', 'Széf']
  },
  {
    id: 2,
    name: 'Deluxe Apartman',
    shortDesc: 'Tágas tér az egész családnak',
    description: 'Kényelmes, két hálószobás apartmanunk tökéletes választás családok számára. Teljesen felszerelt konyha, tágas nappali és modern fürdőszoba várja vendégeinket.',
    price: '65.000 Ft / éj',
    size: '55m²',
    capacity: '4-5 fő',
    images: [
      '/595182562.jpg',
      '/595182578.jpg',
      '/rablaki7813737.jpg'
    ],
    amenities: ['2 hálószoba', 'Felszerelt konyha', 'Légkondicionáló', 'Wifi', 'Smart TV', 'Mosógép', 'Erkély']
  },
  {
    id: 3,
    name: 'Tengerre Néző Stúdió',
    shortDesc: 'Panorámás kilátás a tengerre',
    description: 'Modern stúdió apartman lélegzetelállító kilátással az Adriai-tengerre. Tökéletes választás pároknak vagy egyéni utazóknak.',
    price: '42.000 Ft / éj',
    size: '28m²',
    capacity: '2 fő',
    images: [
      '/Room3/Lakatos_Banjol-127.jpg',
      '/Room3/Lakatos_Banjol-128.jpg',
      '/Room3/Lakatos_Banjol-129.jpg',
      '/Room3/Lakatos_Banjol-133.jpg',
      '/Room3/Lakatos_Banjol-134.jpg',
      '/Room3/Lakatos_Banjol-135.jpg',
      '/Room3/Lakatos_Banjol-136.jpg',
      '/Room3/Lakatos_Banjol-137.jpg',
      '/Room3/Lakatos_Banjol-138.jpg',
      '/Room3/Lakatos_Banjol-139.jpg',
      '/Room3/Lakatos_Banjol-140.jpg',
      '/Room3/Lakatos_Banjol-141.jpg',
      '/Room3/Lakatos_Banjol-142.jpg',
      '/Room3/Lakatos_Banjol-143.jpg',
      '/Room3/Lakatos_Banjol-144.jpg',
      '/Room3/Lakatos_Banjol-145.jpg',
      '/Room3/Lakatos_Banjol-146.jpg',
      '/Room3/Lakatos_Banjol-147.jpg',
      '/Room3/Lakatos_Banjol-148.jpg'
    ],
    amenities: ['Tengerre néző erkély', 'Queen size ágy', 'Légkondicionáló', 'Wifi', 'Mini konyha', 'Smart TV']
  },
  {
    id: 4,
    name: 'Családi Lakosztály',
    shortDesc: 'Tágas terek nagyobb családoknak',
    description: 'Három hálószobás, két fürdőszobás lakosztály, teljesen felszerelt konyhával és tágas nappalival. Ideális nagyobb családok számára.',
    price: '85.000 Ft / éj',
    size: '75m²',
    capacity: '6-7 fő',
    images: [
      '/Room4/Lakatos_Banjol-083.jpg',
      '/Room4/Lakatos_Banjol-084.jpg',
      '/Room4/Lakatos_Banjol-085.jpg',
      '/Room4/Lakatos_Banjol-086.jpg',
      '/Room4/Lakatos_Banjol-087.jpg',
      '/Room4/Lakatos_Banjol-088.jpg',
      '/Room4/Lakatos_Banjol-089.jpg',
      '/Room4/Lakatos_Banjol-090.jpg',
      '/Room4/Lakatos_Banjol-091.jpg',
      '/Room4/Lakatos_Banjol-092.jpg',
      '/Room4/Lakatos_Banjol-093.jpg',
      '/Room4/Lakatos_Banjol-094.jpg',
      '/Room4/Lakatos_Banjol-095.jpg',
      '/Room4/Lakatos_Banjol-096.jpg',
      '/Room4/Lakatos_Banjol-097.jpg',
      '/Room4/Lakatos_Banjol-098.jpg',
      '/Room4/Lakatos_Banjol-099.jpg'
    ],
    amenities: ['3 hálószoba', '2 fürdőszoba', 'Felszerelt konyha', 'Légkondicionáló', 'Wifi', 'Smart TV', 'Mosógép', 'Nagy erkély']
  },
  {
    id: 5,
    name: 'Garden Suite',
    shortDesc: 'Közvetlen kertkapcsolattal',
    description: 'Földszinti, kertre néző apartman saját terasszal. Tökéletes választás kisgyermekes családoknak vagy idősebb vendégeknek.',
    price: '55.000 Ft / éj',
    size: '45m²',
    capacity: '3-4 fő',
    images: [
      '/rablaki7813759.jpg',
      '/595182578.jpg',
      '/rablaki7813737.jpg'
    ],
    amenities: ['Kertkapcsolat', 'Terasz', 'Felszerelt konyha', 'Légkondicionáló', 'Wifi', 'Smart TV', 'Mosógép']
  },
  {
    id: 6,
    name: 'Penthouse Apartman',
    shortDesc: 'Luxus a legfelső szinten',
    description: 'Exkluzív tetőtéri apartman panorámás kilátással a tengerre és a városra. Privát tetőterasz jakuzzival.',
    price: '95.000 Ft / éj',
    size: '80m²',
    capacity: '4 fő',
    images: [
      '/Room6/Lakatos_Banjol-100.jpg',
      '/Room6/Lakatos_Banjol-101.jpg',
      '/Room6/Lakatos_Banjol-102.jpg',
      '/Room6/Lakatos_Banjol-103.jpg',
      '/Room6/Lakatos_Banjol-104.jpg',
      '/Room6/Lakatos_Banjol-105.jpg',
      '/Room6/Lakatos_Banjol-106.jpg',
      '/Room6/Lakatos_Banjol-107.jpg',
      '/Room6/Lakatos_Banjol-108.jpg',
      '/Room6/Lakatos_Banjol-109.jpg',
      '/Room6/Lakatos_Banjol-110.jpg',
      '/Room6/Lakatos_Banjol-111.jpg',
      '/Room6/Lakatos_Banjol-112.jpg',
      '/Room6/Lakatos_Banjol-113.jpg',
      '/Room6/Lakatos_Banjol-114.jpg'
    ],
    amenities: ['Tetőterasz', 'Jakuzzi', '2 hálószoba', 'Luxus fürdő', 'Felszerelt konyha', 'Légkondicionáló', 'Wifi', 'Smart TV']
  },
  {
    id: 7,
    name: 'Economy Szoba',
    shortDesc: 'Megfizethető kényelem',
    description: 'Praktikus elrendezésű, minden szükséges kényelmi szolgáltatással felszerelt szoba kedvező áron.',
    price: '35.000 Ft / éj',
    size: '22m²',
    capacity: '2 fő',
    images: [
      '/rablaki7813755.jpg',
      '/595182562.jpg',
      '/rablaki7813759.jpg'
    ],
    amenities: ['Twin ágyak', 'Légkondicionáló', 'Wifi', 'TV', 'Mini hűtő']
  },
  {
    id: 8,
    name: 'Romantic Suite',
    shortDesc: 'Tökéletes választás pároknak',
    description: 'Romantikus hangulatú lakosztály privát erkéllyel, különleges fürdőszobával és lenyűgöző kilátással.',
    price: '75.000 Ft / éj',
    size: '40m²',
    capacity: '2 fő',
    images: [
      '/rablaki7813737.jpg',
      '/595182578.jpg',
      '/rablaki7813740.jpg'
    ],
    amenities: ['King size ágy', 'Pezsgőfürdős kád', 'Privát erkély', 'Légkondicionáló', 'Wifi', 'Smart TV', 'Mini bár']
  },
  {
    id: 9,
    name: 'Comfort Plus Szoba',
    shortDesc: 'Extra kényelemmel felszerelve',
    description: 'Modern berendezésű szoba extra kényelmi szolgáltatásokkal, dolgozósarokkal és pihenősarokkal.',
    price: '48.000 Ft / éj',
    size: '35m²',
    capacity: '2-3 fő',
    images: [
      '/Room9/Lakatos_Banjol-163.jpg',
      '/Room9/Lakatos_Banjol-150.jpg',
      '/Room9/Lakatos_Banjol-151.jpg',
      '/Room9/Lakatos_Banjol-152.jpg',
      '/Room9/Lakatos_Banjol-153.jpg',
      '/Room9/Lakatos_Banjol-154.jpg',
      '/Room9/Lakatos_Banjol-155.jpg',
      '/Room9/Lakatos_Banjol-156.jpg',
      '/Room9/Lakatos_Banjol-157.jpg',
      '/Room9/Lakatos_Banjol-158.jpg',
      '/Room9/Lakatos_Banjol-159.jpg',
      '/Room9/Lakatos_Banjol-160.jpg',
      '/Room9/Lakatos_Banjol-161.jpg',
      '/Room9/Lakatos_Banjol-162.jpg',
      
    ],
    amenities: ['Queen size ágy', 'Dolgozósarok', 'Pihenősarok', 'Légkondicionáló', 'Wifi', 'Smart TV', 'Kávéfőző']
  },
  {
    id: 10,
    name: 'Duplex Apartman',
    shortDesc: 'Kétszintes luxus apartman',
    description: 'Elegáns kétszintes apartman galériával, két fürdőszobával és modern konyhával. Tökéletes hosszabb tartózkodásra.',
    price: '78.000 Ft / éj',
    size: '65m²',
    capacity: '4-5 fő',
    images: [
      '/Room10/Lakatos_Banjol-180.jpg',
      '/Room10/Lakatos_Banjol-164.jpg',
      '/Room10/Lakatos_Banjol-165.jpg',
      '/Room10/Lakatos_Banjol-166.jpg',
      '/Room10/Lakatos_Banjol-167.jpg',
      '/Room10/Lakatos_Banjol-168.jpg',
      '/Room10/Lakatos_Banjol-169.jpg',
      '/Room10/Lakatos_Banjol-170.jpg',
      '/Room10/Lakatos_Banjol-171.jpg',
      '/Room10/Lakatos_Banjol-172.jpg',
      '/Room10/Lakatos_Banjol-173.jpg',
      '/Room10/Lakatos_Banjol-174.jpg',
      '/Room10/Lakatos_Banjol-175.jpg',
      '/Room10/Lakatos_Banjol-176.jpg',
      '/Room10/Lakatos_Banjol-177.jpg',
      '/Room10/Lakatos_Banjol-178.jpg',
      '/Room10/Lakatos_Banjol-179.jpg',
      
    ],
    amenities: ['2 szint', '2 fürdőszoba', 'Felszerelt konyha', 'Légkondicionáló', 'Wifi', 'Smart TV', 'Mosógép', 'Erkély']
  },
  {
    id: 11,
    name: 'Külső terek és környezet',
    shortDesc: 'Villa Laki Rab környezete',
    description: 'Fedezze fel szálláshelyünk gyönyörű külső tereit, a kertet, a teraszt és a lenyűgöző környezetet. Drónfelvételeken és földi fotókon keresztül mutatjuk be a Villa Laki Rab csodálatos környezetét.',
    price: 'sad',
    size: 'asd',
    capacity: 'asd',
    images: [
      '/outside/dron RL -01.jpg',
      '/outside/dron RL -03.jpg',
      '/outside/dron RL -09.jpg',
      '/outside/dron RL -10.jpg',
      '/outside/dron RL -13.jpg',
      '/outside/dron RL -18.jpg',
      '/outside/IMG_2607.jpg',
      '/outside/IMG_2922.jpg',
      '/outside/Lakatos_Banjol-001.jpg',
      '/outside/Lakatos_Banjol-003.jpg',
      '/outside/Lakatos_Banjol-005.jpg',
      '/outside/Lakatos_Banjol-006.jpg',
      '/outside/Lakatos_Banjol-008.jpg',
      '/outside/Lakatos_Banjol-009.jpg',
      '/outside/Lakatos_Banjol-010.jpg',
      '/outside/Lakatos_Banjol-011.jpg',
      '/outside/Lakatos_Banjol-012.jpg',
      '/outside/Lakatos_Banjol-013.jpg',
      '/outside/Lakatos_Banjol-015.jpg',
      '/outside/Lakatos_Banjol-016.jpg',
      '/outside/Lakatos_Banjol-017.jpg',
      '/outside/Lakatos_Banjol-018.jpg',
      '/outside/Lakatos_Banjol-019.jpg',
      '/outside/Lakatos_Banjol-020.jpg',
      '/outside/Lakatos_Banjol-021.jpg',
      '/outside/Lakatos_Banjol-022.jpg',
      '/outside/Lakatos_Banjol-023.jpg',
      '/outside/Lakatos_Banjol-024.jpg',
      '/outside/Lakatos_Banjol-025.jpg',
      '/outside/Lakatos_Banjol-026.jpg',
      '/outside/Lakatos_Banjol-027.jpg',
      '/outside/Lakatos_Banjol-028.jpg',
      '/outside/Lakatos_Banjol-029.jpg'
    ],
    amenities: [
      'Drónfelvételek',
      'Kert',
      'Terasz',
      'Parkoló',
      'Grillező',
      'Napozóterasz',
      'Tengerre néző kilátás',
      'Panorámás környezet'
    ]
  }
];

export default function Rooms() {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const { t } = useTranslation('common');

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('rooms_section.title')}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('rooms_section.description')}
          </p>
        </div>

        {/* First Row - 3 rooms */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {rooms.slice(0, 3).map((room) => (
            <RoomCard key={room.id} room={room} onClick={() => setSelectedRoom(room)} />
          ))}
        </div>

        {/* Second Row - 2 rooms, centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
          {rooms.slice(3, 5).map((room) => (
            <RoomCard key={room.id} room={room} onClick={() => setSelectedRoom(room)} />
          ))}
        </div>

        {/* Third Row - 3 rooms */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {rooms.slice(5, 8).map((room) => (
            <RoomCard key={room.id} room={room} onClick={() => setSelectedRoom(room)} />
          ))}
        </div>

        {/* Fourth Row - 2 rooms, centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {rooms.slice(8, 10).map((room) => (
            <RoomCard key={room.id} room={room} onClick={() => setSelectedRoom(room)} />
          ))}
        </div>
      </div>

      {selectedRoom && (
        <RoomModal room={selectedRoom} onClose={() => setSelectedRoom(null)} />
      )}
    </section>
  );
}

// Separate RoomCard component for better organization
const RoomCard = ({ room, onClick }: { room: Room; onClick: () => void }) => {
  const { t } = useTranslation('common');
  
  return (
    <div
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <Image 
          src={room.images[0]} 
          alt={room.name} 
          layout="responsive" 
          width={400} 
          height={300} 
          className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{room.name}</h3>
        <p className="text-gray-600 mb-4">{room.shortDesc}</p>
        
        <div className="flex items-center gap-4 mb-6 text-gray-500">
          <div className="flex items-center gap-1">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" 
              />
            </svg>
            <span>{room.size}</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" 
              />
            </svg>
            <span>{room.capacity}</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-primary">{room.price}</span>
          <span className="text-gray-400 group-hover:text-primary transition-colors duration-300">
            {t('rooms_section.details')} →
          </span>
        </div>
      </div>
    </div>
  );
};