import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden" style={{background: 'linear-gradient(135deg, #1E40AF 0%, #1E3A8A 50%, #1E40AF 100%)'}}>
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Левая часть с контентом */}
          <div className="animate-fade-in">
            <h1 className="text-5xl font-bold mb-6 leading-tight text-white">
              Шаг к <span className="text-blue-300">Единству</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Международная организация, объединяющая людей разных стран для продвижения идей глобального сотрудничества и построения справедливого мирового сообщества.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-white text-[#1E40AF] hover:bg-gray-100">
                <Icon name="Users" className="mr-2" size={20} />
                Присоединиться
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1E40AF]">
                <Icon name="Info" className="mr-2" size={20} />
                Узнать больше
              </Button>
            </div>
          </div>

          {/* Правая часть с изображением и градиентом */}
          <div className="relative lg:block hidden">
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/files/dd9e4270-968f-4fb4-9953-5ce9aa0f46f0.jpg" 
                alt="Шаг к Единству" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              {/* Градиентный оверлей для плавного слияния */}
              <div 
                className="absolute inset-0 rounded-lg"
                style={{
                  background: 'linear-gradient(90deg, rgba(30, 64, 175, 0.6) 0%, rgba(30, 64, 175, 0.3) 30%, transparent 70%)'
                }}
              ></div>
              {/* Дополнительный градиент по краям */}
              <div 
                className="absolute -inset-4 -z-10 rounded-xl"
                style={{
                  background: 'linear-gradient(90deg, #1E40AF 0%, rgba(30, 64, 175, 0.5) 50%, transparent 100%)'
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Мобильная версия изображения */}
      <div className="lg:hidden mt-12 px-4">
        <div className="relative">
          <img 
            src="https://cdn.poehali.dev/files/dd9e4270-968f-4fb4-9953-5ce9aa0f46f0.jpg" 
            alt="Шаг к Единству" 
            className="w-full h-auto rounded-lg shadow-2xl"
          />
          <div 
            className="absolute inset-0 rounded-lg"
            style={{
              background: 'linear-gradient(180deg, rgba(30, 64, 175, 0.4) 0%, transparent 50%)'
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Index;