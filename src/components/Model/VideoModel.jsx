import React, { useEffect, useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";
import {
  FaExpand,
  FaPause,
  FaPlay,
} from "react-icons/fa";
import "./VideoModel.css";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";

function getEmbedUrl(url) {
  if (!url) return "";

  const youtubeWatch = /youtube\.com\/watch\?v=([^&]+)/i;
  const youtubeShort = /youtu\.be\/([^?&]+)/i;
  const vimeo = /vimeo\.com\/(\d+)/i;

  const ytWatchMatch = url.match(youtubeWatch);
  if (ytWatchMatch?.[1])
    return `https://www.youtube.com/embed/${ytWatchMatch[1]}`;

  const ytShortMatch = url.match(youtubeShort);
  if (ytShortMatch?.[1])
    return `https://www.youtube.com/embed/${ytShortMatch[1]}`;

  const vimeoMatch = url.match(vimeo);
  if (vimeoMatch?.[1]) return `https://player.vimeo.com/video/${vimeoMatch[1]}`;

  return "";
}

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return "0:00";

  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");

  return `${mins}:${secs}`;
}

export default function VideoModel({ video = "", title = "Project", onClose }) {
  const embedUrl = useMemo(() => getEmbedUrl(video), [video]);
  const isCustomVideo = Boolean(video && !embedUrl);
  const videoRef = useRef(null);
  useLockBodyScroll(true);

  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  useEffect(() => {
    const player = videoRef.current;
    if (!player || !isCustomVideo) return;

    const onLoadedMetadata = () => {
      setDuration(player.duration || 0);
    };

    const onTimeUpdate = () => setProgress(player.currentTime || 0);
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    player.addEventListener("loadedmetadata", onLoadedMetadata);
    player.addEventListener("timeupdate", onTimeUpdate);
    player.addEventListener("play", onPlay);
    player.addEventListener("pause", onPause);

    return () => {
      player.removeEventListener("loadedmetadata", onLoadedMetadata);
      player.removeEventListener("timeupdate", onTimeUpdate);
      player.removeEventListener("play", onPlay);
      player.removeEventListener("pause", onPause);
    };
  }, [isCustomVideo]);

  const togglePlayPause = () => {
    const player = videoRef.current;
    if (!player) return;

    if (player.paused) {
      player.play();
    } else {
      player.pause();
    }
  };

  const handleSeek = (event) => {
    const player = videoRef.current;
    if (!player) return;

    const nextTime = Number(event.target.value);
    player.currentTime = nextTime;
    setProgress(nextTime);
  };

  const toggleFullScreen = () => {
    const player = videoRef.current;
    if (!player) return;

    if (document.fullscreenElement) {
      document.exitFullscreen();
      return;
    }

    player.requestFullscreen();
  };

  return (
    <div className="video-overlay" onClick={onClose}>
      <button className="video-close-btn" onClick={onClose}>
        ×
      </button>

      <div className="video-model" onClick={(e) => e.stopPropagation()}>
        <div className="video-media-container">
          {video ? (
            <video
              className="video-media"
              ref={videoRef}
              src={video}
              autoPlay
              playsInline
            />
          ) : (
            <div className="video-empty-state">No video URL provided</div>
          )}
        </div>

        {isCustomVideo && (
          <div className="video-control-card">
            <button className="video-control-btn" onClick={togglePlayPause}>
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>

            <span className="video-time">{formatTime(progress)}</span>

            <input
              type="range"
              className="video-range video-progress"
              min="0"
              max={duration || 0}
              step="any"
              value={progress}
              onChange={handleSeek}
            />

            <span className="video-time">{formatTime(duration)}</span>
          </div>
        )}
      </div>
    </div>
  );
}

VideoModel.propTypes = {
  video: PropTypes.string,
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};
