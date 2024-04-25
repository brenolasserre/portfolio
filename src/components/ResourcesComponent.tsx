import React, { useState } from 'react';
import Resource from '../components/Resource';

interface ResourcesComponentProps {
  title: string;
  children?: React.ReactNode;
}

const ResourcesComponent = ({ title }: ResourcesComponentProps) => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const toggleFilter = (filter: string) => {
    setActiveFilters(prevFilters => {
      const isFilterActive = prevFilters.includes(filter);
      const newFilters = isFilterActive
        ? prevFilters.filter(f => f !== filter)
        : [...prevFilters, filter];
      console.log('Active Filters:', newFilters); // Debugging line to see active filters
      return newFilters;
    });
  };

  const filterResources = () => {
    return (resource: { categoria: string }) => {
      console.log('Filtering Resources:', resource.categoria); 
      return activeFilters.length === 0 || activeFilters.includes(resource.categoria);
    };
  };

  const resourcesData = [
    {
      nombre: 'Invisible Details of Interaction Design',
      categoria: 'Lectura',
      icon: 'https://rauno.me/favicon.svg',
      url: 'https://rauno.me/craft/interaction-design',
      visibleLinkString: 'rauno.me',
    },
    {
      nombre: 'Ideas that changed my life',
      categoria: 'Lectura',
      icon: 'https://collabfund.com/assets/images/apple-touch-icon.png',
      url: 'https://collabfund.com/reading/article',
      visibleLinkString: 'collabfund.com',
    },
    {
      nombre: 'This is why Deep Learning is really weird.',
      categoria: 'Video',
      icon: 'https://www.youtube.com/s/desktop/adea8f15/img/favicon_48x48.png',
      url: 'https://www.youtube.com/watch?v=sJXn4Cl4oww',
      visibleLinkString: 'youtube.com',
    },
    {
        nombre: 'Invisible Details of Interaction Design',
        categoria: 'Lectura',
        icon: 'https://rauno.me/favicon.svg',
        url: 'https://rauno.me/craft/interaction-design',
        visibleLinkString: 'rauno.me',
      },
      {
        nombre: 'Ideas that changed my life',
        categoria: 'Persona',
        icon: 'https://collabfund.com/assets/images/apple-touch-icon.png',
        url: 'https://collabfund.com/reading/article',
        visibleLinkString: 'collabfund.com',
      },
      {
        nombre: 'This is why Deep Learning is really weird.',
        categoria: 'Video',
        icon: 'https://www.youtube.com/s/desktop/adea8f15/img/favicon_48x48.png',
        url: 'https://www.youtube.com/watch?v=sJXn4Cl4oww',
        visibleLinkString: 'youtube.com',
      },
      {
        nombre: 'Invisible Details of Interaction Design',
        categoria: 'Lectura',
        icon: 'https://rauno.me/favicon.svg',
        url: 'https://rauno.me/craft/interaction-design',
        visibleLinkString: 'rauno.me',
      },
      {
        nombre: 'Ideas that changed my life',
        categoria: 'Video',
        icon: 'https://www.youtube.com/s/desktop/adea8f15/img/favicon_48x48.png',
        url: 'https://www.youtube.com/watch?v=sJXn4Cl4oww',
        visibleLinkString: 'youtube.com',
      },
      {
        nombre: 'This is why Deep Learning is really weird.',
        categoria: 'Video',
        icon: 'https://www.youtube.com/s/desktop/adea8f15/img/favicon_48x48.png',
        url: 'https://www.youtube.com/watch?v=sJXn4Cl4oww',
        visibleLinkString: 'youtube.com',
      },
      {
          nombre: 'Invisible Details of Interaction Design',
          categoria: 'Lectura',
          icon: 'https://rauno.me/favicon.svg',
          url: 'https://rauno.me/craft/interaction-design',
          visibleLinkString: 'rauno.me',
        },
        {
          nombre: 'Ideas that changed my life',
          categoria: 'Persona',
          icon: 'https://collabfund.com/assets/images/apple-touch-icon.png',
          url: 'https://collabfund.com/reading/article',
          visibleLinkString: 'collabfund.com',
        },
        {
            nombre: 'Ideas that changed my life',
            categoria: 'Persona',
            icon: 'https://collabfund.com/assets/images/apple-touch-icon.png',
            url: 'https://collabfund.com/reading/article',
            visibleLinkString: 'collabfund.com',
          },
          {
            nombre: 'Ideas that changed my life',
            categoria: 'Persona',
            icon: 'https://collabfund.com/assets/images/apple-touch-icon.png',
            url: 'https://collabfund.com/reading/article',
            visibleLinkString: 'collabfund.com',
          },
          {
            nombre: 'Ideas that changed my life',
            categoria: 'Persona',
            icon: 'https://collabfund.com/assets/images/apple-touch-icon.png',
            url: 'https://collabfund.com/reading/article',
            visibleLinkString: 'collabfund.com',
          },
          {
            nombre: 'Ideas that changed my life',
            categoria: 'Persona',
            icon: 'https://collabfund.com/assets/images/apple-touch-icon.png',
            url: 'https://collabfund.com/reading/article',
            visibleLinkString: 'collabfund.com',
          },
        {
          nombre: 'This is why Deep Learning is really weird.',
          categoria: 'Video',
          icon: 'https://www.youtube.com/s/desktop/adea8f15/img/favicon_48x48.png',
          url: 'https://www.youtube.com/watch?v=sJXn4Cl4oww',
          visibleLinkString: 'youtube.com',
        },
  ];

  return (
    <div>
      <div className='mb-12 flex gap-3'>
        <button onClick={() => toggleFilter('Lectura')} className={`monospace w-fit cursor-pointer rounded-lg px-3 py-[3px] text-xs text-[#676960] ${activeFilters.includes('Lectura') ? 'bg-[#fff] text-[#1b1b1b]' : '!bg-[#ffffff09]'}`}>
          # Lectura
        </button>
        <button onClick={() => toggleFilter('Video')} className={`monospace w-fit cursor-pointer rounded-lg px-3 py-[3px] text-xs text-[#676960] ${activeFilters.includes('Video') ? 'bg-[#fff] text-[#1b1b1b]' : '!bg-[#ffffff09]'}`}>
          # Video
        </button>
        <button onClick={() => toggleFilter('Persona')} className={`monospace w-fit cursor-pointer rounded-lg px-3 py-[3px] text-xs text-[#676960] ${activeFilters.includes('Persona') ? 'bg-[#fff] text-[#1b1b1b]' : '!bg-[#ffffff09]'}`}>
          # Persona
        </button>
      </div>
      {resourcesData.filter(filterResources()).map((resource, index) => (
        <Resource
          key={index}
          nombre={resource.nombre}
          categoria={resource.categoria}
          icon={resource.icon}
          url={resource.url}
          visibleLinkString={resource.visibleLinkString}
        />
      ))}
    </div>
  );
};

export default ResourcesComponent;