import { FC, useMemo } from 'react';
import { BsPerson } from 'react-icons/bs';
import { range } from 'range';

interface Props {
  shape: 'square' | 'circle';
  seats: number[];
  mode?: 'occupied' | 'reserved' | 'maintenance';
  tableNumber: number;
}

const Table: FC<Props> = ({ shape, tableNumber, seats }) => {
  const height = useMemo(() => (seats[0] || 1) * 100, [seats]);
  const width = useMemo(() => (seats[1] || 1) * 100, [seats]);
  const radius = useMemo(() => (Math.ceil(seats[0] / 4) || 1) * 100, [seats]);
  return (
    <div
      className={`min-w-[100px] min-h-[100px] relative ${
        shape == 'circle' && 'rounded-full'
      } bg-[#FFE4C0] flex items-center justify-center`}
      style={{
        gridColumn: `span ${shape == 'circle' ? radius / 100 : width / 100}`,
        gridRow: `span ${shape == 'circle' ? radius / 100 : height / 100}`,
        width: shape == 'square' ? width : radius,
        height: shape == 'square' ? height : radius,
      }}
    >
      <div className="rounded-full w-14 h-14 bg-grey-300 flex items-center justify-center text-white text-[12px] font-medium font-body">
        T{tableNumber} <BsPerson className="ml-1" />
        {seats.reduce((a, b) => a + b)}
      </div>
      {shape == 'square' ? (
        <>
          {range(1, seats[0] + 1).map((i: number) => {
            return (
              <div
                className={`absolute w-2 h-10 bg-[#4A4A4A] -left-[6px] -z-10 rounded-md`}
                style={{ top: Math.floor(height / seats[0]) * i - Math.floor(height / seats[0]) / 2 - 20 }}
              />
            );
          })}
          {range(1, seats[1] + 1).map((i: number) => {
            return (
              <div
                className={`absolute w-10 h-2 bg-[#4A4A4A] -top-[6px] -z-10 rounded-md`}
                style={{ left: Math.floor(width / seats[1]) * i - Math.floor(width / seats[1]) / 2 - 20 }}
              />
            );
          })}
          {range(1, seats[2] + 1).map((i: number) => {
            return (
              <div
                className={`absolute w-2 h-10 bg-[#4A4A4A] -right-[6px] -z-10 rounded-md`}
                style={{ top: Math.floor(height / seats[2]) * i - Math.floor(height / seats[2]) / 2 - 20 }}
              />
            );
          })}
          {range(1, seats[3] + 1).map((i: number) => {
            return (
              <div
                className={`absolute w-10 h-2 bg-[#4A4A4A] -bottom-[6px] -z-10 rounded-md`}
                style={{ left: Math.floor(width / seats[3]) * i - Math.floor(width / seats[3]) / 2 - 20 }}
              />
            );
          })}
        </>
      ) : (
        <>
          {range(0, seats[0]).map((pair: number, i: number, array: number[]) => (
            <div
              className={`flex -z-10 absolute justify-between h-10`}
              style={{ width: radius + 12, transform: `rotate(${Math.ceil(360 / array.length) * i + 90}deg)` }}
            >
              <div className={`w-2 h-10 bg-[#4A4A4A] rounded-md`} />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

function groupIntoPairsOfTwo(num: number) {
  const numberOfPairs = Math.ceil(num / 2);
  const pairs: Array<Array<number>> = [];
  range(1, numberOfPairs * 2, 2).map((idx: number) => {
    const curPair = [idx, idx + 1];
    pairs.push(curPair);
  });
  return pairs;
}

export default Table;
