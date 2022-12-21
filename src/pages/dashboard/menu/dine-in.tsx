import { useState } from 'react';
import { BiBook, BiPlus } from 'react-icons/bi';
import { Colors } from '../../../../typings/global';
import Division from '../../../components/fragments/Common/Layout/Division';
import Layout from '../../../components/fragments/Common/Layout/Layout';
import Table from '../../../components/fragments/Dashboard/Menu/Table';

interface Seat {
  shape: 'square' | 'circle';
  seats: number[];
  mode?: 'occupied' | 'reserved' | 'maintenance';
  empty?: boolean;
  span?: number;
}

const seats: Seat[] = [
  {
    shape: 'circle',
    seats: [1],
  },
  {
    shape: 'square',
    seats: [1, 0, 1, 0],
  },
  {
    shape: 'square',
    seats: [1, 2, 1, 2],
  },
  {
    shape: 'square',
    seats: [1, 1, 1, 1],
  },
  {
    shape: 'circle',
    seats: [3],
  },
  {
    shape: 'square',
    seats: [1, 1, 1, 1],
  },
  {
    shape: 'square',
    seats: [1, 0, 1, 0],
  },
  {
    shape: 'square',
    seats: [1, 0, 1, 0],
  },
  {
    shape: 'square',
    seats: [],
    empty: true,
    span: 3,
  },
  {
    shape: 'circle',
    seats: [3],
  },
  {
    shape: 'square',
    seats: [1, 1, 1, 1],
  },
];

const DineIn = () => {
  const [active, setActive] = useState(1);
  return (
    <Layout className="gap-[100px] h-screen">
      <Division className="flex flex-col mt-4" division={2}>
        <div
          className={`flex w-full justify-center p-2 items-center gap-2 ${
            active == 1 ? 'bg-[#FFF4E7]' : 'text-grey-100'
          } text-black font-semibold`}
          onClick={setActive.bind(this, 1)}
        >
          <BiBook color={'white'} fill={Colors.PRIMARY} />
          Floor 1
        </div>
        <div
          className={`flex w-full justify-center p-2 items-center gap-2 ${
            active == 2 ? 'bg-[#FFF4E7] text-black' : 'text-grey-100'
          } font-semibold`}
          onClick={setActive.bind(this, 2)}
        >
          <BiBook color={'white'} fill={'#D9D9D9'} />
          Floor 1
        </div>
        <div
          className={`flex w-full justify-center p-2 items-center gap-2 ${
            active == 3 ? 'bg-[#FFF4E7] text-black' : 'text-grey-100'
          } font-semibold`}
          onClick={setActive.bind(this, 3)}
        >
          <BiPlus color={'white'} fill={'#D9D9D9'} />
          Add New
        </div>
      </Division>
      <Division
        className="mt-4 w-full h-fit gap-y-12 gap-x-20 grid grid-cols-7 justify-center place-items-center"
        division={8}
      >
        {seats.map((seat, i) =>
          seat.empty ? (
            <div style={{ gridColumn: `span ${seat.span}` }} />
          ) : (
            <Table shape={seat.shape} seats={seat.seats} tableNumber={i + 1} />
          ),
        )}
      </Division>
    </Layout>
  );
};

export default DineIn;
