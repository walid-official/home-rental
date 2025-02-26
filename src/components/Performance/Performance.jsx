import React from 'react';
import Container from '../../shared/Container';

const Performance = () => {
    return (
        <div className='bg-[#f5f5f5] py-20 mb-10 mt-6'>
            <Container>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
                    <div className="">
                        <h2 className='text-5xl font-semibold leading-tight'>
                            Insights and Performance Metrics
                        </h2>
                    </div>
                    <div className="bg-[#1c1c1c] p-10 rounded-xl">
                        <div className="text-white py-2">
                            <h2 className='font-bold text-4xl text-center'>5000+</h2>
                            <h2 className='text-center py-1'>TotalListings in the Systems</h2>
                        </div>
                    </div>
                    <div className="bg-[#1c1c1c] p-10 rounded-xl">
                        <div className="text-white py-2">
                        <h2 className='font-bold text-4xl text-center'>1000+</h2>
                        <h2 className='text-center py-1'>People Rented Properties</h2>
                        </div>
                    </div>
                    <div className="bg-[#1c1c1c] p-10 rounded-xl">
                        <div className="text-white py-2">
                            <h2 className='font-bold text-4xl text-center'>30+</h2>
                            <h2 className='text-center py-1'>Articles in the Blog</h2>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Performance;