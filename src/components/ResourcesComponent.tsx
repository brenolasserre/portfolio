import React, { useState } from 'react';
import Resource from '../components/Resource';

interface ResourcesComponentProps {
  title: string;
  children?: React.ReactNode;
}

const ResourcesComponent = ({ title }: ResourcesComponentProps) => {
  const [activeFilters, setActiveFilters] = useState<string[]>(['Todos']);

  const toggleFilter = (filter: string) => {
    setActiveFilters((prevFilters) => {
      if (filter === 'Todos') {
        return ['Todos'];
      } else {
        return [filter];
      }
    });
  };
  const filterResources = () => {
    return (resource: { categoria: string }) => {
      return (
        activeFilters.length === 0 ||
        activeFilters.includes('Todos') ||
        activeFilters.includes(resource.categoria)
      );
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
      nombre: 'UI Land (Interviews to top designers)',
      categoria: 'Herramienta',
      icon: 'https://ui.land/favicon.ico',
      url: 'https://ui.land',
      visibleLinkString: 'https://ui.land',
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
      nombre: 'Apple Design: Beyond Flat',
      categoria: 'Video',
      icon: 'https://www.youtube.com/s/desktop/adea8f15/img/favicon_48x48.png',
      url: 'https://www.youtube.com/watch?v=8XjuE-2k1z8',
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
      <div className='mb-12 flex flex-col-reverse justify-between gap-4 md:flex-row lg:flex-row lg:items-center'>
        <div className='flex flex-wrap gap-2'>
          <button
            onClick={() => toggleFilter('Todos')}
            className={`w-fit cursor-pointer rounded-xl border border-[#1e2025] px-3 py-1 text-xs text-[#999999] ${activeFilters.includes('Todos') ? 'bg-[#fff] !text-[#1b1b1b]' : '!bg-[#ffffff09]'}`}
          >
            Todos
          </button>
          <button
            onClick={() => toggleFilter('Herramienta')}
            className={`w-fit cursor-pointer rounded-xl border border-[#1e2025] px-3 py-1 text-xs text-[#999999] ${activeFilters.includes('Herramienta') ? 'bg-[#fff] !text-[#1b1b1b]' : '!bg-[#ffffff09]'}`}
          >
            Herramienta
          </button>
          <button
            onClick={() => toggleFilter('Lectura')}
            className={`w-fit cursor-pointer rounded-xl border border-[#1e2025] px-3 py-1 text-xs text-[#999999] ${activeFilters.includes('Lectura') ? 'bg-[#fff] !text-[#1b1b1b]' : '!bg-[#ffffff09]'}`}
          >
            Lectura
          </button>
          <button
            onClick={() => toggleFilter('Video')}
            className={`w-fit cursor-pointer rounded-xl border border-[#1e2025] px-3 py-1 text-xs text-[#999999] ${activeFilters.includes('Video') ? 'bg-[#fff] !text-[#1b1b1b]' : '!bg-[#ffffff09]'}`}
          >
            Video
          </button>
          <button
            onClick={() => toggleFilter('Persona')}
            className={`w-fit cursor-pointer rounded-xl border border-[#1e2025] px-4 py-1 text-xs text-[#999999] ${activeFilters.includes('Persona') ? 'bg-[#fff] !text-[#1b1b1b]' : '!bg-[#ffffff09]'}`}
          >
            Persona
          </button>
        </div>
        <a
          target='_blank'
          href='https://github.com/brenolasserre/portfolio/issues/new?assignees=brenolasserre&labels=sugerencia&projects=&template=sugerencia-de-recurso.md&title=%5BSugerencia+Recurso%5D'
          className='m-0 w-fit cursor-pointer rounded-lg border border-[#ffffff09] bg-[#ffffff09] px-4 py-1 text-center text-xs !text-[#999999] transition hover:bg-[#ffffff11]'
        >
          Sugerir un recurso
        </a>
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
