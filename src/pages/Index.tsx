import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="text-2xl font-bold text-[#1E40AF]">Шаг к Единству</div>
            <div className="hidden md:flex gap-6">
              <a href="#home" className="text-gray-600 hover:text-[#1E40AF] transition-colors">Главная</a>
              <a href="#mission" className="text-gray-600 hover:text-[#1E40AF] transition-colors">Миссия</a>
              <a href="#about" className="text-gray-600 hover:text-[#1E40AF] transition-colors">О нас</a>
              <a href="#projects" className="text-gray-600 hover:text-[#1E40AF] transition-colors">Проекты</a>
              <a href="#contacts" className="text-gray-600 hover:text-[#1E40AF] transition-colors">Контакты</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img 
              src="https://cdn.poehali.dev/files/58e1de53-596a-43ce-aec6-d8d808fed054.jpg" 
              alt="Логотип организации" 
              className="w-12 h-12 object-contain"
            />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl font-bold mb-6 leading-tight">
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
                  <Icon name="FileText" className="mr-2" size={20} />
                  Программа
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-64 h-64 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Icon name="Globe" size={120} className="text-white/80" />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-300 rounded-full flex items-center justify-center">
                  <Icon name="Heart" size={24} className="text-[#1E40AF]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Наша Миссия</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Объединение граждан для построения справедливого общества, где каждый голос имеет значение, 
            а демократические ценности служат основой для прогресса.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-[#1E40AF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Scale" size={32} className="text-white" />
                </div>
                <CardTitle className="text-[#1E40AF]">Справедливость</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Борьба за равные права и возможности для всех граждан, независимо от социального статуса.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-[#1E40AF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-white" />
                </div>
                <CardTitle className="text-[#1E40AF]">Единство</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Объединение различных социальных групп для достижения общих целей и решения проблем.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-[#1E40AF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Lightbulb" size={32} className="text-white" />
                </div>
                <CardTitle className="text-[#1E40AF]">Прогресс</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Внедрение инновационных решений для улучшения качества жизни и развития общества.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">О нас</h2>
              <p className="text-lg text-gray-600 mb-6">
                "Шаг к Единству" — это политическая организация, созданная гражданами для граждан. 
                Мы верим в силу демократических процессов и коллективного действия.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={24} className="text-[#1E40AF] mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Прозрачность</h3>
                    <p className="text-gray-600">Открытость всех процессов и решений для общественного контроля</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={24} className="text-[#1E40AF] mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Участие</h3>
                    <p className="text-gray-600">Активное вовлечение граждан в принятие важных решений</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={24} className="text-[#1E40AF] mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Ответственность</h3>
                    <p className="text-gray-600">Подотчетность перед обществом и выполнение взятых обязательств</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#1E40AF] text-white p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold">2021</div>
                  <div className="text-sm">Год основания</div>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-[#1E40AF]">1500+</div>
                  <div className="text-sm text-gray-600">Участников</div>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-[#1E40AF]">45</div>
                  <div className="text-sm text-gray-600">Инициатив</div>
                </div>
                <div className="bg-[#1E40AF] text-white p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold">12</div>
                  <div className="text-sm">Регионов</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Наши Проекты</h2>
            <p className="text-xl text-gray-600">
              Конкретные инициативы для улучшения жизни граждан
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#1E40AF]">
                  <Icon name="Building" size={24} />
                  Городская среда
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Инициативы по благоустройству городских пространств, создание парков и зон отдыха.
                </CardDescription>
                <Button variant="outline" className="mt-4 w-full">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#1E40AF]">
                  <Icon name="GraduationCap" size={24} />
                  Образование
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Программы поддержки образовательных учреждений и развития цифровой грамотности.
                </CardDescription>
                <Button variant="outline" className="mt-4 w-full">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#1E40AF]">
                  <Icon name="Leaf" size={24} />
                  Экология
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Проекты по защите окружающей среды и внедрению экологически чистых технологий.
                </CardDescription>
                <Button variant="outline" className="mt-4 w-full">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#1E40AF]">
                  <Icon name="Heart" size={24} />
                  Социальная поддержка
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Программы помощи незащищенным группам населения и развитие социальных услуг.
                </CardDescription>
                <Button variant="outline" className="mt-4 w-full">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#1E40AF]">
                  <Icon name="Zap" size={24} />
                  Цифровизация
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Внедрение цифровых решений в государственные услуги и повышение их доступности.
                </CardDescription>
                <Button variant="outline" className="mt-4 w-full">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#1E40AF]">
                  <Icon name="Users" size={24} />
                  Молодежь
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Программы поддержки молодых инициатив и создание возможностей для развития.
                </CardDescription>
                <Button variant="outline" className="mt-4 w-full">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Связаться с нами</h2>
              <p className="text-lg text-gray-600 mb-8">
                Присоединяйтесь к нашему движению или задайте вопросы. Мы всегда открыты для диалога.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#1E40AF] rounded-full flex items-center justify-center">
                    <Icon name="Mail" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@step-to-unity.org</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#1E40AF] rounded-full flex items-center justify-center">
                    <Icon name="Phone" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Телефон</h3>
                    <p className="text-gray-600">+7 (495) 123-45-67</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#1E40AF] rounded-full flex items-center justify-center">
                    <Icon name="MapPin" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Адрес</h3>
                    <p className="text-gray-600">г. Москва, ул. Демократическая, д. 1</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Отправить сообщение</CardTitle>
                <CardDescription>
                  Заполните форму, и мы обязательно ответим
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Имя</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E40AF]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E40AF]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Сообщение</label>
                  <textarea rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E40AF]"></textarea>
                </div>
                <Button className="w-full bg-[#1E40AF] hover:bg-blue-700">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Шаг к Единству</h3>
              <p className="text-gray-400">
                Политическая организация для демократических изменений
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white transition-colors">Главная</a></li>
                <li><a href="#mission" className="hover:text-white transition-colors">Миссия</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#projects" className="hover:text-white transition-colors">Проекты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>info@step-to-unity.org</li>
                <li>+7 (495) 123-45-67</li>
                <li>г. Москва</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Icon name="Twitter" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Icon name="Instagram" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Шаг к Единству. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;