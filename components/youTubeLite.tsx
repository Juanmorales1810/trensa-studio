"use client";

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'


export default function YouTubeLite() {
    return (
        <div className='w-full h-auto rounded-2xl overflow-hidden shadow-xl'>
            <LiteYouTubeEmbed
                id="kbUJzlXb540"
                title="Matrimonios La Serena Fotografía y Video para tu Boda"
                poster='maxresdefault'
                playerClass='youTubeBtn'
            />
        </div>
    )
}
