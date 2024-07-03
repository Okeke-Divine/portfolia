"use client"
import { useState } from 'react';
import Link from 'next/link';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Swal from 'sweetalert2';

const CopyContent = ({ url }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        setCopied(true);
        Swal.fire({
            icon: 'success',
            title: 'Copied!',
            text: 'URL copied to clipboard',
            timer: 1500,
            showConfirmButton: false
        });
    };

    return (
        <>
            <div className="input border-2 border-gray-100 flex items-center gap-2 mt-1">
                <input
                    value={url}
                    required
                    readOnly
                    className="grow"
                />
                <CopyToClipboard text={url} onCopy={handleCopy}>
                    <i className="fi fi-tr-clone flaticon-offset cursor-pointer"></i>
                </CopyToClipboard>
                <Link href={url} target="_blank">
                    <i className="fi fi-tr-arrow-up-right-from-square flaticon-offset cursor-pointer"></i>
                </Link>
            </div>
        </>
    );
};

export default CopyContent;
