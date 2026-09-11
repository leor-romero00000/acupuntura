import React, { useState, useEffect } from 'react';
import { ScreenId, AcupunctureTopic } from './types';
import { TOPICS_DATA } from './data/acupunctureData';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { HomeScreen } from './components/HomeScreen';
import { CategoryScreen } from './components/CategoryScreen';
import { ResultScreen } from './components/ResultScreen';
import { FavoritesScreen } from './components/FavoritesScreen';
import { SpecialistScreen } from './components/SpecialistScreen';

const FAVORITES_STORAGE_KEY = 'guia_acupuntura_favoritos_v1';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>('inicio');
  const [selectedTopic, setSelectedTopic] = useState<AcupunctureTopic | null>(null);
  const [previousScreen, setPreviousScreen] = useState<ScreenId>('inicio');
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(FAVORITES_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Save favorites to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
    } catch (e) {
      console.warn('No se pudo guardar en localStorage:', e);
    }
  }, [favorites]);

  // Scroll to top upon screen navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentScreen, selectedTopic]);

  const navigateTo = (newScreen: ScreenId) => {
    setPreviousScreen(currentScreen);
    setCurrentScreen(newScreen);
  };

  const handleStart = () => {
    navigateTo('seleccion');
  };

  const handleSelectTopic = (topic: AcupunctureTopic) => {
    setSelectedTopic(topic);
    navigateTo('resultado');
  };

  const handleToggleFavorite = (topicId: string) => {
    setFavorites((prev) =>
      prev.includes(topicId)
        ? prev.filter((id) => id !== topicId)
        : [...prev, topicId]
    );
  };

  const handleBack = () => {
    if (currentScreen === 'resultado') {
      if (previousScreen === 'favoritos') {
        setCurrentScreen('favoritos');
      } else {
        setCurrentScreen('seleccion');
      }
    } else if (currentScreen === 'seleccion') {
      setCurrentScreen('inicio');
    } else if (currentScreen === 'favoritos' || currentScreen === 'especialista') {
      setCurrentScreen(previousScreen === currentScreen ? 'inicio' : previousScreen);
    } else {
      setCurrentScreen('inicio');
    }
  };

  const favoriteTopicsList = TOPICS_DATA.filter((t) => favorites.includes(t.id));

  // Determine top header title override if needed
  let headerTitle: string | undefined;
  if (currentScreen === 'resultado' && selectedTopic) {
    headerTitle = selectedTopic.title;
  } else if (currentScreen === 'especialista') {
    headerTitle = 'Elegir Especialista';
  } else if (currentScreen === 'favoritos') {
    headerTitle = 'Mis Favoritos';
  }

  return (
    <div className="min-h-screen bg-[#fffaf5] text-stone-900 flex flex-col font-sans antialiased selection:bg-orange-200 selection:text-orange-950">
      {/* Top Header with Back button and branding */}
      <Header
        currentScreen={currentScreen}
        onBack={handleBack}
        titleOverride={headerTitle}
      />

      {/* Main Container - max-w-xl gives an optimal reading experience on mobile & desktop */}
      <main className="flex-1 w-full max-w-xl mx-auto px-4 sm:px-6 pt-4 pb-12">
        {currentScreen === 'inicio' && (
          <HomeScreen
            onStart={handleStart}
            onGoToSpecialist={() => navigateTo('especialista')}
          />
        )}

        {currentScreen === 'seleccion' && (
          <CategoryScreen onSelectTopic={handleSelectTopic} />
        )}

        {currentScreen === 'resultado' && selectedTopic && (
          <ResultScreen
            topic={selectedTopic}
            isFavorite={favorites.includes(selectedTopic.id)}
            onToggleFavorite={handleToggleFavorite}
            onBackToSelection={() => setCurrentScreen('seleccion')}
          />
        )}

        {currentScreen === 'favoritos' && (
          <FavoritesScreen
            favoriteTopics={favoriteTopicsList}
            onSelectTopic={handleSelectTopic}
            onRemoveFavorite={handleToggleFavorite}
            onExploreTopics={() => navigateTo('seleccion')}
          />
        )}

        {currentScreen === 'especialista' && <SpecialistScreen />}
      </main>

      {/* Persistent Bottom Navigation Bar */}
      <Navbar
        currentScreen={currentScreen}
        onNavigate={(screen) => {
          if (screen === 'inicio' && currentScreen !== 'inicio') {
            navigateTo('inicio');
          } else {
            navigateTo(screen);
          }
        }}
        favoritesCount={favorites.length}
      />
    </div>
  );
}
