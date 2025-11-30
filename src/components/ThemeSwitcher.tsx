import React, { useState, useEffect, useRef } from 'react';
import SunIcon from "@hackernoon/pixel-icon-library/icons/SVG/regular/sun.svg?react";
import MoonIcon from "@hackernoon/pixel-icon-library/icons/SVG/regular/moon.svg?react";
import DevicesIcon from "@hackernoon/pixel-icon-library/icons/SVG/regular/themes.svg?react";

type Theme = 'light' | 'dark' | 'system';

const ThemeSwitcher: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('system');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      applyTheme('system');
    }
  }, []);

  useEffect(() => {
    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const applyTheme = (selectedTheme: Theme) => {
    const root = document.documentElement;
    
    if (selectedTheme === 'system') {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (systemPrefersDark) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    } else if (selectedTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  };

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
    setIsOpen(false);
  };

  const getCurrentIcon = () => {
    if (theme === 'light') {
      return (
<SunIcon className="w-5 h-5" />
      );
    } else if (theme === 'dark') {
      return (
<MoonIcon className="w-5 h-5" />
      );
    } else {
      return (
<DevicesIcon className="w-5 h-5" />
      );
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md bg-secondary hover:bg-secondary/80 transition-colors border border-border"
        aria-label="Toggle theme"
      >
        {getCurrentIcon()}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-lg bg-card border border-border shadow-lg overflow-hidden z-50">
          <button
            onClick={() => handleThemeChange('light')}
            className={`w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-secondary/50 transition-colors ${
              theme === 'light' ? 'bg-secondary/30' : ''
            }`}
          >
            <SunIcon className="w-5 h-5" />
            <span className="text-sm font-medium">Light</span>
          </button>

          <button
            onClick={() => handleThemeChange('dark')}
            className={`w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-secondary/50 transition-colors ${
              theme === 'dark' ? 'bg-secondary/30' : ''
            }`}
          >
            <MoonIcon className="w-5 h-5" />
            <span className="text-sm font-medium">Dark</span>
          </button>

          <button
            onClick={() => handleThemeChange('system')}
            className={`w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-secondary/50 transition-colors ${
              theme === 'system' ? 'bg-secondary/30' : ''
            }`}
          >
            <DevicesIcon className="w-5 h-5" />
            <span className="text-sm font-medium">System</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
