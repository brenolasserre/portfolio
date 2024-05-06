interface ProjectProps {
  categoria: string;
  nombre: string;
  descripcion: string;
  url: string;
  urlVisible: string;
}

const Project = ({
  categoria,
  urlVisible,
  nombre,
  url,

  descripcion,
}: ProjectProps) => {
  return (
    <div className='shadow-custom mb-4 h-fit w-full rounded-2xl border border-[#1e2025] transition hover:border-[#305ACE] hover:bg-[#050608] active:scale-[0.98] lg:w-[48%]'>
      <a href={url} target='_blank'>
        <div className='flex flex-col gap-2 p-6'>
          <div className='flex items-center justify-between gap-3'>
            <div className='mt-2 flex items-center gap-2'>
              <h5 className='m-0 text-white'>{nombre}</h5>
              <span className='w-fit rounded-lg !bg-[#567be218] px-3 py-[3px] text-xs text-[#567ce2]'>
                {categoria}
              </span>
            </div>
          </div>

          <p className='my-0 text-sm text-[#a5aaa0]'>{descripcion}</p>
        </div>
      </a>
    </div>
  );
};

export default Project;
