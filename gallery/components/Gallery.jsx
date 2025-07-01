import { ChevronDown, Funnel, Calendar, RefreshCw, Play, Star, Eye, Download } from 'lucide-react';
import { useState } from 'react';
import CalendarSelector from './calendar';

export default function Gallery() {
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedYear, setSelectedYear ] = useState('');

    const categories = [
        "All", "Science Exhibition", "Annual Day",
        "Sports Day", "Republic Day", "Independence Day"
    ];

    const featuredAlbums = [
        {
            title: "Annual Day",
            date: "2025-03-10",
            topEvent: true,
            images: ["/annual1.png", "/annual2.png", "/annual3.png"],
        },
        {
            title: "Science Exhibition",
            date: "2025-02-04",
            images: ["/sci1.png", "/sci2.png", "/sci3.png"],
        },
        {
            title: "Sports Day",
            date: "2024-12-15",
            images: ["/spo1.png", "/spo2.png", "/spo3.png"],
        },
    ];

    // const formattedDate = selectedDate
    //     ? new Intl.DateTimeFormat('en-US', {
    //         year: 'numeric',
    //         month: 'long',
    //         day: 'numeric',
    //     }).format(new Date(selectedDate))
    //     : 'dd-mm-yyyy';

    const filteredAlbums = featuredAlbums.filter((album) => {
        const matchesCategory = selectedCategory === 'All' || album.title === selectedCategory;
        const albumDate = new Date(album.date);
        const matchesMonth = !selectedMonth || albumDate.getMonth() + 1 === parseInt(selectedMonth);
        const matchesYear = !selectedYear || albumDate.getFullYear() === parseInt(selectedYear);
        return matchesCategory && matchesMonth && matchesYear;
    })

    return (
        <div className="p-4">
            {/* Filters */}
            <div className="flex items-center bg-white w-full p-4 mt-2 gap-4 rounded-md shadow relative">
                <h1 className="flex items-center text-[#374151] gap-1 text-md font-semibold">
                    <Funnel size={18} /> Filters:
                </h1>

                {/* Category Dropdown */}
                <div className="relative">
                    <button
                        onClick={() => setShowDropdown(!showDropdown)}
                        className="px-3 py-2 rounded-md bg-[#EBDDFC] flex items-center justify-between text-sm text-[#7E22CE] gap-2"
                    >
                        Category: {selectedCategory} <ChevronDown size={16} />
                    </button>
                    {showDropdown && (
                        <div className="absolute z-10 mt-2 w-40 bg-white border rounded-md shadow">
                            {categories.map((cat) => (
                                <div
                                    key={cat}
                                    onClick={() => {
                                        setSelectedCategory(cat);
                                        setShowDropdown(false);
                                    }}
                                    className="px-4 py-2 text-sm text-gray-700 hover:bg-[#EBDDFC] cursor-pointer"
                                >
                                    {cat}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Date Picker */}
                <CalendarSelector selectedMonth={selectedMonth} selectedYear={selectedYear} onMonthChange={setSelectedMonth} onYearChange={setSelectedYear} />


                {/* Reset Button */}
                <button
                    onClick={() => {
                        setSelectedCategory('All');
                        setSelectedMonth('');
                        setSelectedYear('');
                    }}
                    className="bg-[#EAEAEA] text-[#4B5563] flex items-center text-sm px-4 py-2 gap-2 rounded-md"
                >
                    <RefreshCw size={15} /> Reset
                </button>
            </div>

            {/* Filtered Albums */}
            <div className="mt-6">
                {filteredAlbums.length > 0 ? (
                    filteredAlbums.map((album, i) => (
                        <div key={i} className="bg-white p-4 rounded-md shadow mb-4">
                            <div className="border border-gray-300 rounded-xl">
                                <div>
                                    <div className="flex justify-between items-center mb-2 bg-[#EBDDFC4D] w-full p-2 border-b border-gray-300 pl-5">
                                        <div>
                                            <h2 className="font-semibold text-sm flex items-center gap-1 text-[#4B5563] mb-1">
                                                <Star size={16} className="text-purple-600 mb-0.5" />
                                                Featured Albums
                                            </h2>
                                            <h3 className="text-lg font-semibold text-[#1F2937]">
                                                {album.title}
                                            </h3>
                                            <div className="flex items-center text-sm text-gray-500">
                                                <Calendar size={14} className="mr-1 mb-0.5" />
                                                {new Date(album.date).toLocaleDateString()}
                                            </div>
                                        </div>
                                        {album.topEvent && (
                                            <div className="bg-[#EBDDFC] text-purple-700 text-xs font-semibold px-2 py-1 rounded-full">
                                                ★ Top Event
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex gap-5 p-5">
                                        {album.images.map((src, idx) => (
                                            <img
                                                key={idx}
                                                src={src}
                                                alt={`Slide ${idx}`}
                                                className="w-70 h-55 object-cover rounded-md"
                                            />
                                        ))}
                                        <div className="w-70 h-55 bg-[#EBDDFC] flex justify-center items-center rounded-md">
                                            <Play size={24} className="text-purple-700" />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-between text-sm text-purple-600 font-medium border-t border-gray-300 p-3">
                                    <button className="flex gap-1">
                                        <Eye size={18} /> View
                                    </button>
                                    <button className="flex items-center gap-1 hover:underline">
                                        <Download size={17} /> Download Album
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500 mt-10">
                        No albums found for selected filters.
                    </p>
                )}
            </div>
        </div>
    );
}
