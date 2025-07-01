'use client';

import { useState } from "react";
import {
    Search, Folder, BookText, SignalHigh, BookOpen, User, Barcode,
    CalendarDays, Clock, Eye, Download, RefreshCw, LibraryBig,
    PlusCircle, ClipboardEdit, BookMarked
} from "lucide-react";

export default function Library() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedSubject, setSelectedSubject] = useState("All");
    const [showAvailableOnly, setShowAvailableOnly] = useState(false);

    const data = [
        {
            title: "Physics Galaxy Vol.1",
            author: "Ashish Arora",
            isbn: "978-123456789",
            status: "available",
            format: "ebook",
            ebookUrl: "/ebooks/physics-galaxy.pdf",
            category: "Science",
            subject: "Physics"
        },
        {
            title: "Algebra for Beginners",
            author: "R.D. Sharma",
            isbn: "978-987654321",
            status: "overdue",
            issuedDate: "2025-06-10",
            returnDate: "2025-06-25",
            category: "Mathematics",
            subject: "Algebra"
        },
        {
            title: "English Essays",
            author: "Dr. Mittal",
            isbn: "978-555555555",
            status: "available",
            format: "ebook",
            ebookUrl: "/ebooks/english-essays.pdf",
            category: "Language",
            subject: "English"
        },
        {
            title: "Introduction to Biology",
            author: "N.C.E.R.T",
            isbn: "978-321456987",
            status: "issued",
            issuedDate: "2025-06-15",
            returnDate: "2025-06-29",
            category: "Science",
            subject: "Biology"
        },
        {
            title: "World History Guide",
            author: "S. Sen",
            isbn: "978-222333444",
            status: "available",
            format: "ebook",
            ebookUrl: "/ebooks/history-guide.pdf",
            category: "History",
            subject: "World History"
        },
        {
            title: "Modern Geography Handbook",
            author: "Priya Khanna",
            isbn: "978-999888777",
            status: "issued",
            issuedDate: "2025-06-20",
            returnDate: "2025-07-05",
            category: "Geography",
            subject: "Modern Geography"
        },
        {
            title: "Organic Chemistry Simplified",
            author: "H.C. Verma",
            isbn: "978-111222333",
            status: "available",
            format: "ebook",
            ebookUrl: "/ebooks/organic-chem.pdf",
            category: "Science",
            subject: "Chemistry"
        },
        {
            title: "Geometry Basics",
            author: "R.D. Sharma",
            isbn: "978-444555666",
            status: "overdue",
            issuedDate: "2025-06-01",
            returnDate: "2025-06-20",
            category: "Mathematics",
            subject: "Geometry"
        },
        {
            title: "Poetry for Beginners",
            author: "Kiran Desai",
            isbn: "978-777666555",
            status: "available",
            format: "ebook",
            ebookUrl: "/ebooks/poetry-beginners.pdf",
            category: "Language",
            subject: "English"
        },
        {
            title: "Indian Polity",
            author: "M. Laxmikanth",
            isbn: "978-666777888",
            status: "issued",
            issuedDate: "2025-06-23",
            returnDate: "2025-07-10",
            category: "Political Science",
            subject: "Civics"
        }
    ];

    const filteredBooks = data.filter((book) => {
        const search = searchTerm.trim().toLowerCase();
        const category = selectedCategory.toLowerCase();
        const subject = selectedSubject.toLowerCase();

        const matchesSearch = search ? book.title.toLowerCase().includes(search) : true;
        const matchesCategory = selectedCategory === "All" || (book.category && book.category.toLowerCase() === category);
        const matchesSubject = selectedSubject === "All" || (book.subject && book.subject.toLowerCase() === subject);
        const matchesAvailability = showAvailableOnly ? book.status === "available" : true;

        return matchesSearch && matchesCategory && matchesSubject && matchesAvailability;
    });

    return (
        <div className="p-7 bg-[#F9F7FB] space-y-6">
            {/* Filters */}
            <div className="bg-white p-6 rounded-md shadow text-[#4B5563]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="flex gap-1 mb-1"><Search size={15} /> Search Book:</label>
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#7E22CE]"
                        />
                    </div>

                    <div>
                        <label className="flex items-center gap-1 mb-1"><Folder size={15} /> Category:</label>
                        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md text-[#111827] focus:outline-none focus:ring-1 focus:ring-[#7E22CE]">
                            <option>All</option>
                            <option>Science</option>
                            <option>Mathematics</option>
                            <option>History</option>
                            <option>Geography</option>
                            <option>Language</option>
                            <option>Political Science</option>
                        </select>
                    </div>

                    <div>
                        <label className="flex items-center gap-1 mb-1"><BookText size={15} /> Subject:</label>
                        <select value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md text-[#111827] focus:outline-none focus:ring-1 focus:ring-[#7E22CE]">
                            <option>All</option>
                            <option>Physics</option>
                            <option>Algebra</option>
                            <option>English</option>
                            <option>Biology</option>
                            <option>World History</option>
                            <option>Modern Geography</option>
                            <option>Chemistry</option>
                            <option>Geometry</option>
                            <option>Civics</option>
                        </select>
                    </div>

                    <div className="flex flex-col justify-end">
                        <label className="flex items-center gap-1 mb-1"><SignalHigh size={15} /> Availability:</label>
                        <label className="flex items-center gap-2 mt-2 text-sm">
                            <input type="checkbox" checked={showAvailableOnly} onChange={() => setShowAvailableOnly(!showAvailableOnly)} className="form-checkbox text-purple-600 border-gray-300 rounded focus:ring-[#7E22CE]" />
                            <span className="text-[#111827]">Show available only</span>
                        </label>
                    </div>
                </div>
            </div>

            {/* Filtered Book List */}
            <div className="space-y-4">
                {filteredBooks.map((book, i) => (
                    <div key={i} className="bg-white rounded-md p-5 shadow-sm flex justify-between items-start">
                        <div>
                            <h3 className="font-semibold text-lg flex items-center gap-2 text-[#4B0082]">
                                <LibraryBig size={16} /> {book.title}
                            </h3>
                            <p className="text-sm text-gray-600 mt-1 mb-1 flex items-center gap-1">
                                <User size={14} /> Author: {book.author}
                            </p>
                            <p className="text-sm text-gray-600 flex items-center gap-1">
                                <Barcode size={14} /> ISBN: {book.isbn}
                            </p>

                            <div className="mt-2 space-y-1">
                                {book.status === "available" && (
                                    <span className="inline-flex items-center px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full">
                                        ✔ Available
                                    </span>
                                )}
                                {book.format === "ebook" && (
                                    <span className="inline-flex items-center gap-1 px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">
                                        <BookMarked size={14} className="text-blue-700" /> eBook
                                    </span>
                                )}
                            </div>

                            {(book.status === "overdue" || book.status === "issued") && (
                                <p className="text-sm text-gray-600 mt-2 flex gap-4">
                                    <span className="flex items-center gap-1"><CalendarDays size={14} /> {book.issuedDate}</span>
                                    <span className="flex items-center gap-1"><Clock size={14} /> {book.returnDate}</span>
                                </p>
                            )}

                            {book.status === "overdue" && (
                                <span className="inline-block mt-2 px-2 py-1 text-xs bg-red-100 text-red-700 rounded-full">
                                    ❗ Overdue
                                </span>
                            )}
                        </div>

                        <div className="flex flex-col gap-2 items-end">
                            {book.format === "ebook" ? (
                                <a href={book.ebookUrl} className="flex items-center gap-1 bg-purple-500 text-white px-3 py-1 rounded-md text-sm">
                                    <BookOpen size={14} /> View Online
                                </a>
                            ) : book.status === "overdue" ? (
                                <button className="flex items-center gap-1 bg-purple-100 text-purple-700 px-3 py-1 rounded-md text-sm">
                                    <RefreshCw size={14} /> Request Renew
                                </button>
                            ) : (
                                <>
                                    <button className="flex items-center gap-1 bg-gray-100 text-gray-600 px-3 py-1 rounded-md text-sm">
                                        <Eye size={14} /> View Details
                                    </button>
                                    <button className="flex items-center gap-1 bg-purple-500 text-white px-3 py-1 rounded-md text-sm">
                                        <Download size={14} /> Download
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                ))}

                {/* Request New Book Card */}
                <div className="bg-[#EBDDFC] border border-dashed border-[#a855f7] p-4 rounded-md flex justify-between items-center">
                    <div>
                        <h4 className="text-[#9333ea] font-semibold text-sm flex items-center gap-1">
                            <PlusCircle size={14} /> Request New Book
                        </h4>
                        <p className="text-sm text-[#4B5563]">
                            Can’t find what you’re looking for? Request a new book to be added to the library.
                        </p>
                    </div>
                    <button className="flex items-center gap-1 bg-purple-500 text-white px-3 py-1 rounded-md text-sm">
                        <ClipboardEdit size={14} /> Make Request
                    </button>
                </div>
            </div>
        </div>
    );
}
