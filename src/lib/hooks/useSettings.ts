'use client';
import { useState, useCallback } from 'react';
interface Settings { slippage: number; deadline: number; expertMode: boolean; darkMode: boolean; }
const defaultSettings: Settings = { slippage: 0.5, deadline: 20, expertMode: false, darkMode: true };
export function useSettings() {
  const [settings, setSettings] = useState<Settings>(defaultSettings);
  const updateSetting = useCallback(<K extends keyof Settings>(key: K, value: Settings[K]) => {
    setSettings(s => ({ ...s, [key]: value }));
  }, []);
  return { settings, updateSetting };
}
