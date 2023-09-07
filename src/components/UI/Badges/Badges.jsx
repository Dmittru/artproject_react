import React from 'react';

const Badges = ({badges}) => {

    const types = {
        gray: {
            bg: 'bg-gray-400/20',
            text: 'text-gray-400',
            ring: 'ring-gray-400/60',
        },
        red: {
            bg: 'bg-red-400/20',
            text: 'text-red-400',
            ring: 'ring-red-400/60',
        },
        yellow: {
            bg: 'bg-yellow-400/20',
            text: 'text-yellow-500',
            ring: 'ring-yellow-400/60',
        },
        green: {
            bg: 'bg-green-500/20',
            text: 'text-green-400',
            ring: 'ring-green-500/60',
        },
        blue: {
            bg: 'bg-blue-400/20',
            text: 'text-blue-400',
            ring: 'ring-blue-400/60',
        },
        indigo: {
            bg: 'bg-indigo-400/20',
            text: 'text-indigo-400',
            ring: 'ring-indigo-400/60',
        },
        purple: {
            bg: 'bg-purple-400/20',
            text: 'text-purple-400',
            ring: 'ring-purple-400/60',
        },
        pink: {
            bg: 'bg-pink-400/20',
            text: 'text-pink-400',
            ring: 'ring-pink-400/60',
        },
    }

    return (
        <>
            {badges && badges.map((badge) => {
                return (
                    <span
                        key={badge.title}
                        className={`ml-2 inline-flex items-center rounded-md ${types[badge.color].bg} px-2 py-1 text-base font-medium ${types[badge.color].text} ring-1 ring-inset ${types[badge.color].ring}`}>
                        {badge.title}
                    </span>
                )
            })}
        </>
    );
};

export default Badges;