import { useState, useEffect } from "react";
import {
  Search, MapPin, X, ChevronDown, Grid3X3, List, ChevronRight,
  Play, Award, Clock, BookOpen, Star, Share2, Download, Eye,
  CheckCircle2, FileText, BarChart3, UserCheck, Send, Users,
  Menu, X as XIcon, ArrowUp, ArrowLeft, Globe, Phone, Mail,
  Lock, Instagram, Calendar, Activity, CircleDot, MessageCircle,
  Heart, ExternalLink
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import heroImg from "@/assets/hero-mapeamentos.jpg";
import territoriosImg from "@/assets/territorios-negros.jpg";
import comidaImg from "@/assets/comida-de-rua.jpg";
import coletivosImg from "@/assets/lgbtqia-coletivos.jpg";
import eventosImg from "@/assets/eventos-lgbtqia.jpg";
import cursoTerritoriosImg from "@/assets/curso-territorios.jpg";
import cursoGastronomiaImg from "@/assets/curso-gastronomia.jpg";
import cursoDireitosImg from "@/assets/curso-direitos.jpg";

/* ─── NAV LINKS ─── */
const navItems = [
  { label: "Cursos EAD", href: "#cursos" },
  { label: "Mapeamentos", href: "#mapeamentos" },
  { label: "Consulta", href: "#consulta" },
  { label: "Cadastro", href: "#cadastro" },
];

/* ─── HEADER ─── */
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-card/95 backdrop-blur-lg shadow-sm border-b border-border" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-display font-bold text-sm">N</span>
          </div>
          <span className="font-display font-bold text-lg">Exemplos</span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" size="sm" className="text-sm">Entrar</Button>
          <Button size="sm" className="text-sm">Começar</Button>
        </div>

        <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
          {mobileOpen ? <XIcon className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-lg border-b border-border px-6 pb-4 space-y-1">
          {navItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="flex gap-2 pt-2">
            <Button variant="ghost" size="sm" className="flex-1 text-sm">Entrar</Button>
            <Button size="sm" className="flex-1 text-sm">Começar</Button>
          </div>
        </div>
      )}
    </header>
  );
};

/* ─── HERO ─── */
const Hero = () => (
  <section className="relative pt-32 pb-20 text-center overflow-hidden">
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
    </div>
    <div className="max-w-3xl mx-auto px-6 space-y-6">
      <Badge variant="secondary" className="text-xs font-medium px-3 py-1">
        Apresentação de Design
      </Badge>
      <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight">
        Plataforma <span className="text-primary">Nix</span>
      </h1>
      <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
        Cursos EAD, mapeamentos culturais, sistema de filtros e fluxo de cadastro — tudo em uma plataforma integrada.
      </p>
      <div className="flex items-center justify-center gap-3 pt-2">
        <Button size="lg" className="gap-2" asChild>
          <a href="#cursos"><Play className="h-4 w-4" /> Explorar</a>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <a href="#cadastro">Ver fluxo</a>
        </Button>
      </div>
    </div>
  </section>
);

/* ─── SECTION WRAPPER ─── */
const Section = ({ id, children, accentColor = "bg-primary" }: { id: string; children: React.ReactNode; accentColor?: string }) => (
  <section id={id} className="scroll-mt-20">
    {children}
  </section>
);

/* ─── SEÇÃO 1: CURSOS EAD ─── */
const CursosSection = () => (
  <Section id="cursos">
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className="w-1.5 h-8 rounded-full bg-primary" />
          <h2 className="text-2xl font-display font-bold">Área de Cursos EAD</h2>
        </div>
        <p className="text-muted-foreground ml-5">Cursos, palestras e masterclasses com certificação</p>
      </div>

      {/* Hero search */}
      <div className="relative rounded-2xl overflow-hidden border border-border">
        <img src={heroImg} alt="Banner cursos" className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-2xl w-full px-6 text-center space-y-4">
            <h3 className="font-display text-2xl font-bold text-card">O que você quer aprender?</h3>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input className="w-full pl-12 pr-4 py-4 rounded-xl bg-card/95 backdrop-blur border border-border shadow-lg text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="Buscar cursos, palestras, masterclasses..." />
            </div>
            <div className="flex items-center justify-center gap-2 flex-wrap">
              {["Cultura Negra", "Gastronomia de Rua", "Direitos LGBTQIA+", "Territórios Urbanos"].map(t => (
                <span key={t} className="px-3 py-1 rounded-full text-xs font-medium bg-card/80 backdrop-blur border border-card/50 text-card-foreground hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-3 items-center flex-wrap">
        <Tabs defaultValue="todos">
          <TabsList>
            <TabsTrigger value="todos">Todos</TabsTrigger>
            <TabsTrigger value="cursos">Cursos</TabsTrigger>
            <TabsTrigger value="palestras">Palestras</TabsTrigger>
            <TabsTrigger value="masterclass">Masterclasses</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="flex-1" />
        {[{ l: "Nível", icon: BarChart3 }, { l: "Duração", icon: Clock }, { l: "Certificação", icon: Award }].map(f => (
          <button key={f.l} className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-card hover:bg-muted text-xs font-medium transition-colors">
            <f.icon className="h-3.5 w-3.5 text-muted-foreground" /> {f.l} <ChevronDown className="h-3 w-3 text-muted-foreground" />
          </button>
        ))}
      </div>

      {/* Course cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: "Territórios Negros: História e Resistência", type: "Curso", duration: "12h", modules: 8, cert: true, img: cursoTerritoriosImg, rating: 4.8, students: 234 },
          { title: "Gastronomia Afrodiaspórica", type: "Masterclass", duration: "3h", modules: 4, cert: true, img: cursoGastronomiaImg, rating: 4.5, students: 189 },
          { title: "Direitos e Visibilidade LGBTQIA+", type: "Palestra", duration: "1h30", modules: 1, cert: false, img: cursoDireitosImg, rating: 4.9, students: 412 },
        ].map(c => (
          <div key={c.title} className="rounded-2xl border border-border bg-card overflow-hidden hover:shadow-xl transition-all group hover:-translate-y-1">
            <div className="relative h-44 overflow-hidden">
              <img src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <Badge className="absolute top-3 left-3 text-[10px] bg-card/90 backdrop-blur text-card-foreground border-0">{c.type}</Badge>
              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                <div className="flex items-center gap-2 text-[11px] text-card font-medium">
                  <span className="flex items-center gap-1"><Users className="h-3 w-3" /> {c.students} alunos</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-primary/90 backdrop-blur flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer">
                  <Play className="h-4 w-4 text-primary-foreground ml-0.5" />
                </div>
              </div>
            </div>
            <div className="p-5 space-y-3">
              <h4 className="font-display font-semibold text-sm leading-tight line-clamp-2">{c.title}</h4>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {c.duration}</span>
                <span className="flex items-center gap-1"><BookOpen className="h-3 w-3" /> {c.modules} módulos</span>
                {c.cert && <span className="flex items-center gap-1 text-accent"><Award className="h-3 w-3" /> Certificado</span>}
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-border">
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className={`h-3.5 w-3.5 ${i <= Math.floor(c.rating) ? "fill-secondary text-secondary" : "text-border"}`} />)}
                  <span className="text-xs text-muted-foreground ml-1.5 font-medium">{c.rating}</span>
                </div>
                <Button size="sm" variant="ghost" className="text-xs h-8 gap-1.5 font-semibold"><Play className="h-3 w-3" /> Acessar</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

/* ─── SEÇÃO 2: MAPEAMENTOS ─── */
type MappingId = "territorios" | "comida" | "coletivos" | "eventos";

interface MappingMeta {
  id: MappingId;
  title: string;
  desc: string;
  count: number;
  img: string;
  color: string;
  gradient: string;
}

const mappingsMeta: MappingMeta[] = [
  { id: "territorios", title: "Territórios Negros Urbanos", desc: "Espaços de memória, resistência e cultura negra nas cidades", count: 142, img: territoriosImg, color: "from-nix-purple/80", gradient: "from-nix-purple to-nix-purple/60" },
  { id: "comida", title: "Cultura de Comida de Rua", desc: "Pontos gastronômicos, feiras e vendedores ambulantes", count: 89, img: comidaImg, color: "from-nix-orange/80", gradient: "from-nix-orange to-nix-orange/60" },
  { id: "coletivos", title: "Coletivos LGBTQIA+", desc: "Organizações, grupos e iniciativas da comunidade", count: 67, img: coletivosImg, color: "from-nix-pink/80", gradient: "from-nix-pink to-nix-pink/60" },
  { id: "eventos", title: "Eventos LGBTQIA+", desc: "Festas, paradas, encontros e atividades culturais", count: 34, img: eventosImg, color: "from-nix-teal/80", gradient: "from-nix-teal to-nix-teal/60" },
];

interface MappingRecord {
  name: string;
  city: string;
  status: "Ativo" | "Inativo";
  img: string;
  publicInfo: Record<string, string>;
  privateInfo: Record<string, string>;
  tags: string[];
}

const mappingData: Record<MappingId, { filters: string[]; records: MappingRecord[] }> = {
  territorios: {
    filters: ["Quilombo", "Terreiro", "Escola de Samba", "Museu", "Memorial", "Feira"],
    records: [
      { name: "Quilombo da Saúde", city: "São Paulo, SP", status: "Ativo", img: territoriosImg, publicInfo: { "Tipo": "Quilombo Urbano", "Fundação": "1850", "Visitação": "Seg a Sex, 9h–17h", "Site": "quilombodosaude.org.br" }, privateInfo: { "Responsável": "••••••••", "Telefone": "••••••••", "E-mail": "••••••••" }, tags: ["Quilombo", "Patrimônio"] },
      { name: "Terreiro Casa Branca", city: "Salvador, BA", status: "Ativo", img: territoriosImg, publicInfo: { "Tipo": "Terreiro", "Fundação": "1812", "Visitação": "Mediante agendamento", "Site": "casabranca.org.br" }, privateInfo: { "Responsável": "••••••••", "Telefone": "••••••••", "E-mail": "••••••••" }, tags: ["Terreiro", "Patrimônio"] },
      { name: "Memorial Zumbi", city: "Rio de Janeiro, RJ", status: "Ativo", img: territoriosImg, publicInfo: { "Tipo": "Memorial", "Fundação": "1988", "Visitação": "Ter a Dom, 10h–18h", "Site": "memorialzumbi.rj.gov.br" }, privateInfo: { "Responsável": "••••••••", "Telefone": "••••••••", "E-mail": "••••••••" }, tags: ["Memorial", "Museu"] },
      { name: "Feira do Bixiga", city: "São Paulo, SP", status: "Inativo", img: territoriosImg, publicInfo: { "Tipo": "Feira Cultural", "Fundação": "1972", "Funcionamento": "Suspenso temporariamente", "Site": "—" }, privateInfo: { "Responsável": "••••••••", "Telefone": "••••••••", "E-mail": "••••••••" }, tags: ["Feira"] },
    ],
  },
  comida: {
    filters: ["Barraca", "Food Truck", "Feira", "Restaurante", "Ambulante"],
    records: [
      { name: "Acarajé da Dinha", city: "Salvador, BA", status: "Ativo", img: comidaImg, publicInfo: { "Tipo": "Barraca", "Especialidade": "Acarajé e abará", "Horário": "Seg a Sáb, 16h–22h", "Local": "Largo de Itapuã" }, privateInfo: { "Responsável": "••••••••", "Telefone": "••••••••", "E-mail": "••••••••" }, tags: ["Barraca", "Comida Baiana"] },
      { name: "Feira de São Joaquim", city: "Salvador, BA", status: "Ativo", img: comidaImg, publicInfo: { "Tipo": "Feira", "Especialidade": "Produtos regionais e comida de rua", "Horário": "Diário, 5h–18h", "Local": "Av. Eng. Oscar Pontes" }, privateInfo: { "Responsável": "••••••••", "Telefone": "••••••••", "E-mail": "••••••••" }, tags: ["Feira"] },
      { name: "Afro Vegan Food Truck", city: "São Paulo, SP", status: "Ativo", img: comidaImg, publicInfo: { "Tipo": "Food Truck", "Especialidade": "Gastronomia afro vegana", "Horário": "Qui a Dom, 11h–20h", "Instagram": "@afrovegan" }, privateInfo: { "Responsável": "••••••••", "Telefone": "••••••••", "E-mail": "••••••••" }, tags: ["Food Truck", "Vegano"] },
      { name: "Mercado Popular da 74", city: "Goiânia, GO", status: "Inativo", img: comidaImg, publicInfo: { "Tipo": "Mercado", "Especialidade": "Comida goiana de rua", "Funcionamento": "Encerrado em 2023", "Local": "Setor Central" }, privateInfo: { "Responsável": "••••••••", "Telefone": "••••••••", "E-mail": "••••••••" }, tags: ["Mercado"] },
    ],
  },
  coletivos: {
    filters: ["Esporte", "Cultura", "Saúde", "Educação", "Advocacy"],
    records: [
      { name: "Coletivo Esporte Diversidade", city: "São Paulo, SP", status: "Ativo", img: coletivosImg, publicInfo: { "Modalidade": "Vôlei e Corrida", "Local de treino": "Parque Ibirapuera", "Dias": "Sáb e Dom, 9h–12h", "Instagram": "@esportediversidade" }, privateInfo: { "Responsável": "••••••••", "Telefone": "••••••••", "E-mail": "••••••••" }, tags: ["Esporte", "Vôlei"] },
      { name: "Arco-Íris FC", city: "Rio de Janeiro, RJ", status: "Ativo", img: coletivosImg, publicInfo: { "Modalidade": "Futebol", "Local de treino": "Campo do Flamengo", "Dias": "Qua e Sex, 19h–21h", "Instagram": "@arcoirisfc" }, privateInfo: { "Responsável": "••••••••", "Telefone": "••••••••", "E-mail": "••••••••" }, tags: ["Esporte", "Futebol"] },
      { name: "Coletivo Transformar", city: "Belo Horizonte, MG", status: "Ativo", img: coletivosImg, publicInfo: { "Modalidade": "Artes e Cultura", "Local": "Centro Cultural LGBTQIA+", "Dias": "Ter e Qui, 14h–18h", "Instagram": "@transformarbh" }, privateInfo: { "Responsável": "••••••••", "Telefone": "••••••••", "E-mail": "••••••••" }, tags: ["Cultura", "Artes"] },
      { name: "Grupo Resistência", city: "Recife, PE", status: "Inativo", img: coletivosImg, publicInfo: { "Modalidade": "Advocacy", "Local": "—", "Funcionamento": "Inativo desde 2024", "Instagram": "@resistenciarec" }, privateInfo: { "Responsável": "••••••••", "Telefone": "••••••••", "E-mail": "••••••••" }, tags: ["Advocacy"] },
    ],
  },
  eventos: {
    filters: ["Parada", "Festival", "Encontro", "Esportivo", "Cultural"],
    records: [
      { name: "Parada do Orgulho SP", city: "São Paulo, SP", status: "Ativo", img: eventosImg, publicInfo: { "Tipo": "Parada", "Data": "Junho/2026", "Local": "Av. Paulista", "Público estimado": "3 milhões" }, privateInfo: { "Organização": "••••••••", "Telefone": "••••••••", "E-mail": "••••••••" }, tags: ["Parada", "Anual"] },
      { name: "Festival Mix Brasil", city: "São Paulo, SP", status: "Ativo", img: eventosImg, publicInfo: { "Tipo": "Festival de Cinema", "Data": "Novembro/2026", "Local": "CineSesc", "Edição": "34ª" }, privateInfo: { "Organização": "••••••••", "Telefone": "••••••••", "E-mail": "••••••••" }, tags: ["Festival", "Cinema"] },
      { name: "Torneio Diversidade Esportiva", city: "Rio de Janeiro, RJ", status: "Ativo", img: eventosImg, publicInfo: { "Tipo": "Esportivo", "Data": "Março/2026", "Local": "Aterro do Flamengo", "Modalidades": "Vôlei, Futsal, Corrida" }, privateInfo: { "Organização": "••••••••", "Telefone": "••••••••", "E-mail": "••••••••" }, tags: ["Esportivo"] },
      { name: "Encontro Nacional LGBT 2023", city: "Brasília, DF", status: "Inativo", img: eventosImg, publicInfo: { "Tipo": "Encontro", "Data": "Outubro/2023", "Local": "Centro de Convenções", "Participantes": "1.200" }, privateInfo: { "Organização": "••••••••", "Telefone": "••••••••", "E-mail": "••••••••" }, tags: ["Encontro"] },
    ],
  },
};

/* ─── DETAIL CARD (perfil do registro) ─── */
const RecordDetail = ({ record, onBack, accentGradient }: { record: MappingRecord; onBack: () => void; accentGradient: string }) => {
  const [showPrivate, setShowPrivate] = useState(false);

  return (
    <div className="space-y-6">
      <button onClick={onBack} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
        <ArrowLeft className="h-4 w-4" /> Voltar à lista
      </button>

      <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
        {/* Banner */}
        <div className="relative h-40 overflow-hidden">
          <img src={record.img} alt={record.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
          <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
            <div>
              <h3 className="font-display font-bold text-xl text-card">{record.name}</h3>
              <p className="text-sm text-card/80 flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {record.city}</p>
            </div>
            <Badge className={`${record.status === "Ativo" ? "bg-accent/90" : "bg-muted-foreground/80"} text-white border-0 gap-1`}>
              <CircleDot className="h-3 w-3" /> {record.status}
            </Badge>
          </div>
        </div>

        <div className="p-5 md:p-6 space-y-5">
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {record.tags.map(t => (
              <span key={t} className="px-2.5 py-1 rounded-full text-[11px] font-medium border border-border bg-muted/50">{t}</span>
            ))}
          </div>

          {/* Public info */}
          <div className="space-y-3">
            <h4 className="text-xs font-display font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
              <Globe className="h-3.5 w-3.5" /> Informações Públicas
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {Object.entries(record.publicInfo).map(([k, v]) => (
                <div key={k} className="rounded-xl bg-muted/30 border border-border/50 p-3">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">{k}</p>
                  <p className="text-sm font-medium">{v}</p>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Private info (login required) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-display font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                <Lock className="h-3.5 w-3.5" /> Informações Restritas
              </h4>
              <Button size="sm" variant={showPrivate ? "default" : "outline"} className="text-xs h-7 gap-1.5 rounded-lg" onClick={() => setShowPrivate(!showPrivate)}>
                {showPrivate ? <><Eye className="h-3 w-3" /> Ocultar</> : <><Lock className="h-3 w-3" /> Simular login</>}
              </Button>
            </div>
            {showPrivate ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Object.entries(record.privateInfo).map(([k, v]) => (
                  <div key={k} className="rounded-xl bg-primary/5 border border-primary/10 p-3">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-primary/60 mb-1">{k}</p>
                    <p className="text-sm font-medium">{v}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-border bg-muted/20 p-5 text-center">
                <Lock className="h-5 w-5 text-muted-foreground/40 mx-auto mb-2" />
                <p className="text-xs text-muted-foreground">Faça login para ver dados de contato do responsável</p>
              </div>
            )}
          </div>

          <Separator />

          {/* Interaction bar */}
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <Button size="sm" variant="outline" className="text-xs h-8 gap-1.5 rounded-lg"><Heart className="h-3.5 w-3.5" /> Favoritar</Button>
              <Button size="sm" variant="outline" className="text-xs h-8 gap-1.5 rounded-lg"><MessageCircle className="h-3.5 w-3.5" /> Contato</Button>
              <Button size="sm" variant="outline" className="text-xs h-8 gap-1.5 rounded-lg"><Share2 className="h-3.5 w-3.5" /> Compartilhar</Button>
            </div>
            {record.status === "Inativo" && (
              <Badge variant="secondary" className="text-[10px] gap-1"><Activity className="h-3 w-3" /> Solicitar reativação</Badge>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─── MAPPING DETAIL VIEW (lista de registros de uma base) ─── */
const MappingDetailView = ({ mapping, onBack }: { mapping: MappingMeta; onBack: () => void }) => {
  const data = mappingData[mapping.id];
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "Ativo" | "Inativo">("all");
  const [selectedRecord, setSelectedRecord] = useState<MappingRecord | null>(null);

  const filtered = data.records.filter(r => {
    const matchSearch = r.name.toLowerCase().includes(search.toLowerCase()) || r.city.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "all" || r.status === statusFilter;
    return matchSearch && matchStatus;
  });

  if (selectedRecord) {
    return <RecordDetail record={selectedRecord} onBack={() => setSelectedRecord(null)} accentGradient={mapping.gradient} />;
  }

  return (
    <div className="space-y-6">
      {/* Back + header */}
      <button onClick={onBack} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
        <ArrowLeft className="h-4 w-4" /> Todos os mapeamentos
      </button>

      <div className="relative rounded-2xl overflow-hidden h-44">
        <img src={mapping.img} alt={mapping.title} className="w-full h-full object-cover" />
        <div className={`absolute inset-0 bg-gradient-to-t ${mapping.color} to-foreground/20`} />
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <Badge className="w-fit mb-2 bg-card/20 backdrop-blur border-card/30 text-card text-[10px]">{mapping.count} registros</Badge>
          <h3 className="font-display font-bold text-2xl text-card">{mapping.title}</h3>
          <p className="text-sm text-card/80">{mapping.desc}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-card border border-border text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="Buscar por nome ou cidade..."
          />
        </div>
        <div className="flex gap-2">
          {(["all", "Ativo", "Inativo"] as const).map(s => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`px-3 py-2 rounded-xl text-xs font-medium border transition-colors ${statusFilter === s ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border hover:bg-muted"}`}
            >
              {s === "all" ? "Todos" : s}
            </button>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {data.filters.map(f => (
          <span key={f} className="px-2.5 py-1 rounded-full text-[11px] font-medium border border-border bg-card hover:bg-muted cursor-pointer transition-colors">{f}</span>
        ))}
      </div>

      {/* Records grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filtered.map(r => (
          <button
            key={r.name}
            onClick={() => setSelectedRecord(r)}
            className="rounded-xl border border-border bg-card p-4 hover:shadow-lg transition-all hover:-translate-y-0.5 space-y-3 text-left group"
          >
            <div className="h-28 rounded-lg overflow-hidden relative">
              <img src={r.img} alt={r.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <Badge className={`absolute top-2 right-2 text-[10px] border-0 gap-1 ${r.status === "Ativo" ? "bg-accent/90 text-white" : "bg-muted-foreground/80 text-white"}`}>
                <CircleDot className="h-2.5 w-2.5" /> {r.status}
              </Badge>
            </div>
            <div>
              <h5 className="font-display font-semibold text-sm group-hover:text-primary transition-colors">{r.name}</h5>
              <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5"><MapPin className="h-3 w-3" />{r.city}</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                {r.tags.slice(0, 2).map(t => (
                  <span key={t} className="text-[10px] px-2 py-0.5 rounded-md bg-muted font-medium">{t}</span>
                ))}
              </div>
              <span className="text-xs text-primary font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Ver perfil <ExternalLink className="h-3 w-3" />
              </span>
            </div>
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="rounded-xl border border-dashed border-border bg-muted/20 p-8 text-center">
          <Search className="h-6 w-6 text-muted-foreground/40 mx-auto mb-2" />
          <p className="text-sm text-muted-foreground">Nenhum registro encontrado</p>
        </div>
      )}
    </div>
  );
};

/* ─── MAPEAMENTOS SECTION (landing + detail) ─── */
const MapeamentosLanding = () => {
  const [selectedMapping, setSelectedMapping] = useState<MappingMeta | null>(null);

  return (
    <Section id="mapeamentos" accentColor="bg-accent">
      <div className="space-y-8">
        {selectedMapping ? (
          <MappingDetailView mapping={selectedMapping} onBack={() => setSelectedMapping(null)} />
        ) : (
          <>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="w-1.5 h-8 rounded-full bg-accent" />
                <h2 className="text-2xl font-display font-bold">Plataforma de Mapeamentos</h2>
              </div>
              <p className="text-muted-foreground ml-5">Escolha uma base para consultar</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mappingsMeta.map(m => (
                <button
                  key={m.id}
                  onClick={() => setSelectedMapping(m)}
                  className="group relative rounded-2xl overflow-hidden h-56 text-left hover:shadow-2xl transition-all hover:-translate-y-1"
                >
                  <img src={m.img} alt={m.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${m.color} to-foreground/20`} />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <Badge className="w-fit mb-3 bg-card/20 backdrop-blur border-card/30 text-card text-[10px]">{m.count} registros</Badge>
                    <h4 className="font-display font-bold text-xl text-card mb-1">{m.title}</h4>
                    <p className="text-sm text-card/80 line-clamp-2">{m.desc}</p>
                    <div className="flex items-center gap-1.5 mt-3 text-card/70 text-xs font-medium group-hover:text-card transition-colors">
                      Explorar base <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="rounded-xl border border-dashed border-border bg-muted/30 p-6 text-center">
              <p className="text-sm text-muted-foreground">Novos mapeamentos serão adicionados em breve</p>
              <button className="text-xs text-primary font-medium mt-1 hover:underline">Sugerir um mapeamento →</button>
            </div>
          </>
        )}
      </div>
    </Section>
  );
};

/* ─── SEÇÃO 3: FILTROS DO MAPEAMENTO ─── */
const MapeamentoFilters = () => (
  <Section id="consulta">
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className="w-1.5 h-8 rounded-full bg-nix-purple" />
          <h2 className="text-2xl font-display font-bold">Consulta — Territórios Negros Urbanos</h2>
        </div>
        <p className="text-muted-foreground ml-5">Filtros e busca na base de dados</p>
      </div>

      <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="w-full md:w-72 border-b md:border-b-0 md:border-r border-border p-5 space-y-5 bg-muted/20">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-card border border-border text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-nix-purple/30" placeholder="Buscar..." />
            </div>
            <div>
              <h4 className="text-xs font-display font-semibold uppercase tracking-wider text-muted-foreground mb-3">Cidade</h4>
              <div className="space-y-1.5">
                {["São Paulo (78)", "Rio de Janeiro (32)", "Salvador (18)", "Belo Horizonte (14)"].map(c => (
                  <label key={c} className="flex items-center gap-2.5 p-1.5 rounded-md hover:bg-muted cursor-pointer text-sm"><Checkbox />{c}</label>
                ))}
              </div>
            </div>
            <Separator />
            <div>
              <h4 className="text-xs font-display font-semibold uppercase tracking-wider text-muted-foreground mb-3">Tipo</h4>
              <div className="flex flex-wrap gap-1.5">
                {["Quilombo", "Terreiro", "Escola de Samba", "Museu", "Memorial", "Feira"].map(t => (
                  <span key={t} className="px-2.5 py-1 rounded-full text-[11px] font-medium border border-border bg-card hover:bg-nix-purple hover:text-nix-purple-foreground cursor-pointer transition-colors">{t}</span>
                ))}
              </div>
            </div>
            <Separator />
            <div>
              <h4 className="text-xs font-display font-semibold uppercase tracking-wider text-muted-foreground mb-3">Status</h4>
              <div className="space-y-1.5">
                {[{ l: "Publicado", dot: "bg-accent" }, { l: "Em revisão", dot: "bg-secondary" }, { l: "Pendente", dot: "bg-muted-foreground" }].map(s => (
                  <label key={s.l} className="flex items-center gap-2.5 p-1.5 rounded-md hover:bg-muted cursor-pointer text-sm">
                    <Checkbox /><span className={`w-2 h-2 rounded-full ${s.dot}`} />{s.l}
                  </label>
                ))}
              </div>
            </div>
            <div className="flex gap-2">
              <Button size="sm" className="flex-1">Filtrar</Button>
              <Button size="sm" variant="outline" className="gap-1"><Download className="h-3 w-3" /> Exportar</Button>
            </div>
          </div>

          {/* Results */}
          <div className="flex-1 p-5 space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2 flex-wrap">
                <Badge variant="secondary" className="gap-1 text-xs">São Paulo <X className="h-3 w-3" /></Badge>
                <Badge variant="secondary" className="gap-1 text-xs">Quilombo <X className="h-3 w-3" /></Badge>
                <button className="text-xs text-primary hover:underline">Limpar</button>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">142 resultados</span>
                <div className="flex border border-border rounded-lg overflow-hidden">
                  <button className="p-1.5 bg-primary text-primary-foreground"><Grid3X3 className="h-3.5 w-3.5" /></button>
                  <button className="p-1.5 hover:bg-muted text-muted-foreground"><List className="h-3.5 w-3.5" /></button>
                  <button className="p-1.5 hover:bg-muted text-muted-foreground"><MapPin className="h-3.5 w-3.5" /></button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: "Quilombo da Saúde", city: "São Paulo, SP", type: "Quilombo Urbano", status: "Publicado" },
                { name: "Terreiro Casa Branca", city: "Salvador, BA", type: "Terreiro", status: "Publicado" },
                { name: "Memorial Zumbi", city: "Rio de Janeiro, RJ", type: "Memorial", status: "Em revisão" },
                { name: "Feira do Bixiga", city: "São Paulo, SP", type: "Feira", status: "Publicado" },
              ].map(r => (
                <div key={r.name} className="rounded-xl border border-border bg-card p-4 hover:shadow-lg transition-all hover:-translate-y-0.5 space-y-3">
                  <div className="h-24 rounded-lg overflow-hidden">
                    <img src={territoriosImg} alt={r.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex items-start justify-between">
                    <div>
                      <h5 className="font-display font-semibold text-sm">{r.name}</h5>
                      <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5"><MapPin className="h-3 w-3" />{r.city}</p>
                    </div>
                    <Badge variant={r.status === "Publicado" ? "default" : "secondary"} className="text-[10px]">{r.status}</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] px-2 py-0.5 rounded-md bg-muted font-medium">{r.type}</span>
                    <div className="flex gap-1">
                      <button className="p-1.5 hover:bg-muted rounded-md"><Eye className="h-3.5 w-3.5 text-muted-foreground" /></button>
                      <button className="p-1.5 hover:bg-muted rounded-md"><Share2 className="h-3.5 w-3.5 text-muted-foreground" /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

/* ─── SEÇÃO 4: FLUXO DE CADASTRO ─── */
const initialForm = { nome: "", cidade: "", endereco: "", contato: "", descricao: "", mapeamento: "", categoria: "" };
type FormData = typeof initialForm;
type FormKey = keyof FormData;

const mapeamentoOptions = ["Territórios Negros Urbanos", "Cultura de Comida de Rua", "Coletivos LGBTQIA+", "Eventos LGBTQIA+"];
const categoriaOptions = ["Quilombo", "Terreiro", "Escola de Samba", "Museu", "Memorial", "Feira", "Coletivo", "Evento"];

const CadastroFlow = () => {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<FormKey, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const set = (key: FormKey, value: string) => {
    setForm(prev => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors(prev => { const n = { ...prev }; delete n[key]; return n; });
  };

  const validate = (): boolean => {
    const e: Partial<Record<FormKey, string>> = {};
    if (!form.nome.trim()) e.nome = "Campo obrigatório";
    if (!form.cidade.trim()) e.cidade = "Campo obrigatório";
    if (!form.endereco.trim()) e.endereco = "Campo obrigatório";
    if (!form.contato.trim()) e.contato = "Campo obrigatório";
    if (!form.descricao.trim()) e.descricao = "Campo obrigatório";
    if (!form.mapeamento) e.mapeamento = "Selecione uma opção";
    if (!form.categoria) e.categoria = "Selecione uma opção";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    setSending(true);
    setTimeout(() => { setSending(false); setSubmitted(true); }, 1500);
  };

  const handleReset = () => { setForm(initialForm); setErrors({}); setSubmitted(false); };

  const filledCount = Object.values(form).filter(v => v.trim()).length;
  const totalFields = Object.keys(form).length;

  const inputFields: { key: FormKey; label: string; placeholder: string; icon: typeof Users }[] = [
    { key: "nome", label: "Nome do local / coletivo", placeholder: "Ex: Quilombo da Saúde", icon: Users },
    { key: "cidade", label: "Cidade / Estado", placeholder: "Ex: São Paulo, SP", icon: MapPin },
    { key: "endereco", label: "Endereço completo", placeholder: "Rua, número, bairro...", icon: MapPin },
    { key: "contato", label: "Contato", placeholder: "E-mail ou telefone", icon: Send },
  ];

  return (
    <Section id="cadastro">
      <div className="space-y-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="w-1.5 h-8 rounded-full bg-nix-orange" />
            <h2 className="text-2xl font-display font-bold">Fluxo de Cadastro e Moderação</h2>
          </div>
          <p className="text-muted-foreground ml-5">Visão do processo de submissão e aprovação</p>
        </div>

        {/* Flow steps */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { step: 1, title: "Preenchimento", desc: "Usuário submete via formulário público", icon: FileText, color: "text-nix-orange", bg: "bg-nix-orange/10", border: "border-nix-orange/20" },
            { step: 2, title: "Curadoria", desc: "Dados entram em revisão interna da Nix", icon: Eye, color: "text-nix-purple", bg: "bg-nix-purple/10", border: "border-nix-purple/20" },
            { step: 3, title: "Aprovação", desc: "Equipe revisa, padroniza e valida", icon: UserCheck, color: "text-nix-teal", bg: "bg-nix-teal/10", border: "border-nix-teal/20" },
            { step: 4, title: "Publicação", desc: "Registro publicado e visível no sistema", icon: CheckCircle2, color: "text-accent", bg: "bg-accent/10", border: "border-accent/20" },
          ].map((s, i) => (
            <div key={s.step} className="flex items-start gap-0">
              <div className={`flex-1 rounded-2xl border ${s.border} bg-card p-5 text-center space-y-3 hover:shadow-md transition-all`}>
                <div className={`w-12 h-12 rounded-xl ${s.bg} ${s.color} flex items-center justify-center mx-auto`}>
                  <s.icon className="h-5 w-5" />
                </div>
                <div>
                  <span className={`text-[10px] font-display font-bold ${s.color}`}>{s.step}</span>
                  <h5 className="font-display font-semibold text-sm">{s.title}</h5>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{s.desc}</p>
                </div>
              </div>
              {i < 3 && (
                <div className="hidden md:flex items-center self-center -mx-2 z-10">
                  <ChevronRight className="h-4 w-4 text-muted-foreground/40" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Interactive form */}
        <div className="relative rounded-2xl border border-border bg-gradient-to-br from-card via-card to-muted/20 overflow-hidden shadow-sm">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-nix-orange via-primary to-nix-purple" />

          {submitted ? (
            <div className="p-6 md:p-10 flex flex-col items-center justify-center text-center space-y-5 min-h-[400px]">
              <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center">
                <CheckCircle2 className="h-10 w-10 text-accent" />
              </div>
              <div className="space-y-2">
                <h4 className="font-display font-bold text-xl">Cadastro enviado</h4>
                <p className="text-sm text-muted-foreground max-w-md">
                  O registro de <span className="font-semibold text-foreground">{form.nome}</span> foi enviado para curadoria. Você receberá uma notificação quando for revisado.
                </p>
              </div>
              <Button variant="outline" className="rounded-xl gap-2 mt-2" onClick={handleReset}>
                <FileText className="h-4 w-4" /> Enviar outro cadastro
              </Button>
            </div>
          ) : (
            <div className="p-6 md:p-10 space-y-8">
              {/* Header + progress */}
              <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-nix-orange to-primary/80 flex items-center justify-center shadow-md">
                    <FileText className="h-5 w-5 text-white" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-display font-bold text-lg">Formulário de Cadastro</h4>
                    <p className="text-sm text-muted-foreground">Preencha os dados abaixo para submeter um novo registro</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 min-w-[140px]">
                  <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-nix-orange to-primary transition-all duration-500 ease-out"
                      style={{ width: `${(filledCount / totalFields) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">{filledCount}/{totalFields}</span>
                </div>
              </div>

              <Separator />

              {/* Fields */}
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                  {inputFields.map(f => (
                    <div key={f.key} className="space-y-2 group">
                      <label className={`text-xs font-semibold uppercase tracking-wider transition-colors ${errors[f.key] ? "text-destructive" : "text-muted-foreground group-focus-within:text-primary"}`}>
                        {f.label}
                      </label>
                      <div className="relative">
                        <f.icon className={`absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 transition-colors ${errors[f.key] ? "text-destructive/50" : "text-muted-foreground/50 group-focus-within:text-primary/60"}`} />
                        <input
                          value={form[f.key]}
                          onChange={e => set(f.key, e.target.value)}
                          className={`w-full pl-10 pr-4 py-3 rounded-xl bg-background/60 border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 transition-all ${errors[f.key] ? "border-destructive/50 focus:ring-destructive/20 focus:border-destructive/30" : "border-border focus:ring-primary/20 focus:border-primary/30"}`}
                          placeholder={f.placeholder}
                        />
                      </div>
                      {errors[f.key] && <p className="text-xs text-destructive">{errors[f.key]}</p>}
                    </div>
                  ))}
                </div>

                <div className="space-y-2 group">
                  <div className="flex items-center justify-between">
                    <label className={`text-xs font-semibold uppercase tracking-wider transition-colors ${errors.descricao ? "text-destructive" : "text-muted-foreground group-focus-within:text-primary"}`}>
                      Descrição
                    </label>
                    <span className="text-xs text-muted-foreground/60">{form.descricao.length}/500</span>
                  </div>
                  <textarea
                    value={form.descricao}
                    onChange={e => set("descricao", e.target.value.slice(0, 500))}
                    className={`w-full px-4 py-3 rounded-xl bg-background/60 border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 transition-all resize-none h-28 ${errors.descricao ? "border-destructive/50 focus:ring-destructive/20" : "border-border focus:ring-primary/20 focus:border-primary/30"}`}
                    placeholder="Descreva o local, coletivo ou evento..."
                  />
                  {errors.descricao && <p className="text-xs text-destructive">{errors.descricao}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                  {([
                    { key: "mapeamento" as FormKey, label: "Mapeamento", options: mapeamentoOptions },
                    { key: "categoria" as FormKey, label: "Categoria", options: categoriaOptions },
                  ]).map(f => (
                    <div key={f.key} className="space-y-2">
                      <label className={`text-xs font-semibold uppercase tracking-wider ${errors[f.key] ? "text-destructive" : "text-muted-foreground"}`}>
                        {f.label}
                      </label>
                      <select
                        value={form[f.key]}
                        onChange={e => set(f.key, e.target.value)}
                        className={`w-full px-4 py-3 rounded-xl bg-background/60 border text-sm focus:outline-none focus:ring-2 transition-all appearance-none cursor-pointer ${!form[f.key] ? "text-muted-foreground/50" : "text-foreground"} ${errors[f.key] ? "border-destructive/50 focus:ring-destructive/20" : "border-border focus:ring-primary/20 focus:border-primary/30"}`}
                      >
                        <option value="">Selecione...</option>
                        {f.options.map(o => <option key={o} value={o}>{o}</option>)}
                      </select>
                      {errors[f.key] && <p className="text-xs text-destructive">{errors[f.key]}</p>}
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Actions */}
              <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-muted-foreground">
                  {Object.keys(errors).length > 0
                    ? <span className="text-destructive">Preencha os campos destacados</span>
                    : "Todos os campos são obrigatórios"}
                </p>
                <div className="flex gap-3 w-full sm:w-auto">
                  <Button variant="outline" className="flex-1 sm:flex-initial rounded-xl" onClick={handleReset}>Limpar</Button>
                  <Button
                    className="flex-1 sm:flex-initial gap-2 rounded-xl shadow-md hover:shadow-lg transition-shadow disabled:opacity-60"
                    onClick={handleSubmit}
                    disabled={sending}
                  >
                    {sending ? (
                      <><span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" /> Enviando...</>
                    ) : (
                      <><Send className="h-4 w-4" /> Enviar para curadoria</>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};

/* ─── BACK TO TOP ─── */
const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
      aria-label="Voltar ao topo"
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
};

/* ─── PAGE ─── */
const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <Hero />
    <div className="max-w-6xl mx-auto px-6 pb-20 space-y-20">
      <CursosSection />
      <MapeamentosLanding />
      <MapeamentoFilters />
      <CadastroFlow />
    </div>
    <BackToTop />
  </div>
);

export default Index;
