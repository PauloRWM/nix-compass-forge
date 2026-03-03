import { Search, SlidersHorizontal, MapPin, X, ChevronDown, Grid3X3, List, Filter, Calendar, Tag, Users, Globe, ArrowUpDown, Play, Award, Clock, BookOpen, ChevronRight, Star, Heart, Share2, Download, Eye, CheckCircle2, FileText, BarChart3, Settings, UserCheck, Send } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

/* ─── SEÇÃO 1: CURSOS EAD ─── */

const CursosSection = () => (
  <section className="space-y-8">
    <div>
      <div className="flex items-center gap-3 mb-2">
        <span className="w-1.5 h-8 rounded-full bg-primary" />
        <h2 className="text-2xl font-display font-bold">Área de Cursos EAD</h2>
      </div>
      <p className="text-muted-foreground ml-5">Cursos, palestras e masterclasses com certificação</p>
    </div>

    {/* Hero search */}
    <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-foreground/[0.03] via-nix-purple/[0.06] to-nix-pink/[0.06] border border-border p-8">
      <div className="max-w-2xl mx-auto text-center space-y-5">
        <h3 className="font-display text-xl font-bold">O que você quer aprender?</h3>
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input className="w-full pl-12 pr-4 py-4 rounded-xl bg-card border border-border shadow-sm text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="Buscar cursos, palestras, masterclasses..." />
        </div>
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <span className="text-xs text-muted-foreground">Populares:</span>
          {["Cultura Negra", "Gastronomia de Rua", "Direitos LGBTQIA+", "Territórios Urbanos"].map(t => (
            <span key={t} className="px-3 py-1 rounded-full text-xs font-medium bg-card border border-border hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors">{t}</span>
          ))}
        </div>
      </div>
    </div>

    {/* Filters + Content */}
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
    <div className="grid grid-cols-3 gap-5">
      {[
        { title: "Territórios Negros: História e Resistência", type: "Curso", duration: "12h", modules: 8, cert: true, color: "bg-nix-purple" },
        { title: "Gastronomia Afrodiaspórica", type: "Masterclass", duration: "3h", modules: 4, cert: true, color: "bg-nix-orange" },
        { title: "Direitos e Visibilidade LGBTQIA+", type: "Palestra", duration: "1h30", modules: 1, cert: false, color: "bg-nix-pink" },
      ].map(c => (
        <div key={c.title} className="rounded-xl border border-border bg-card overflow-hidden hover:shadow-lg transition-shadow group">
          <div className={`h-36 ${c.color}/10 relative flex items-center justify-center`}>
            <div className={`w-14 h-14 rounded-full ${c.color}/20 flex items-center justify-center group-hover:scale-110 transition-transform`}>
              <Play className={`h-6 w-6 text-foreground/60`} />
            </div>
            <Badge className="absolute top-3 left-3 text-[10px]" variant="secondary">{c.type}</Badge>
          </div>
          <div className="p-4 space-y-3">
            <h4 className="font-display font-semibold text-sm leading-tight">{c.title}</h4>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {c.duration}</span>
              <span className="flex items-center gap-1"><BookOpen className="h-3 w-3" /> {c.modules} módulos</span>
              {c.cert && <span className="flex items-center gap-1 text-accent"><Award className="h-3 w-3" /> Certificado</span>}
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-border">
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map(i => <Star key={i} className={`h-3 w-3 ${i <= 4 ? "fill-secondary text-secondary" : "text-border"}`} />)}
                <span className="text-[10px] text-muted-foreground ml-1">(4.2)</span>
              </div>
              <Button size="sm" variant="ghost" className="text-xs h-7 gap-1"><Play className="h-3 w-3" /> Acessar</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

/* ─── SEÇÃO 2: MAPEAMENTOS LANDING ─── */

const MapeamentosLanding = () => (
  <section className="space-y-8">
    <div>
      <div className="flex items-center gap-3 mb-2">
        <span className="w-1.5 h-8 rounded-full bg-accent" />
        <h2 className="text-2xl font-display font-bold">Plataforma de Mapeamentos</h2>
      </div>
      <p className="text-muted-foreground ml-5">Escolha uma base para consultar</p>
    </div>

    {/* Mapping bases */}
    <div className="grid grid-cols-2 gap-5">
      {[
        { title: "Territórios Negros Urbanos", desc: "Espaços de memória, resistência e cultura negra nas cidades", count: 142, color: "nix-purple", icon: MapPin },
        { title: "Cultura de Comida de Rua", desc: "Pontos gastronômicos, feiras e vendedores ambulantes", count: 89, color: "nix-orange", icon: Globe },
        { title: "Coletivos LGBTQIA+", desc: "Organizações, grupos e iniciativas da comunidade", count: 67, color: "nix-pink", icon: Users },
        { title: "Eventos LGBTQIA+", desc: "Festas, paradas, encontros e atividades culturais", count: 34, color: "nix-teal", icon: Calendar },
      ].map(m => (
        <button key={m.title} className="group relative rounded-2xl border-2 border-border bg-card p-6 text-left hover:shadow-xl transition-all hover:border-foreground/20">
          <div className={`w-12 h-12 rounded-xl bg-${m.color}/10 flex items-center justify-center mb-4`}>
            <m.icon className={`h-6 w-6 text-${m.color}`} />
          </div>
          <h4 className="font-display font-bold text-lg mb-1">{m.title}</h4>
          <p className="text-sm text-muted-foreground mb-4">{m.desc}</p>
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="text-xs">{m.count} registros</Badge>
            <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
          </div>
        </button>
      ))}
    </div>

    {/* Future mappings teaser */}
    <div className="rounded-xl border border-dashed border-border bg-muted/30 p-6 text-center">
      <p className="text-sm text-muted-foreground">Novos mapeamentos serão adicionados em breve</p>
      <button className="text-xs text-primary font-medium mt-1 hover:underline">Sugerir um mapeamento →</button>
    </div>
  </section>
);

/* ─── SEÇÃO 3: FILTROS DO MAPEAMENTO (após seleção) ─── */

const MapeamentoFilters = () => (
  <section className="space-y-8">
    <div>
      <div className="flex items-center gap-3 mb-2">
        <span className="w-1.5 h-8 rounded-full bg-nix-purple" />
        <h2 className="text-2xl font-display font-bold">Consulta — Territórios Negros Urbanos</h2>
      </div>
      <p className="text-muted-foreground ml-5">Filtros e busca na base de dados</p>
    </div>

    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <div className="flex">
        {/* Sidebar filters */}
        <div className="w-72 border-r border-border p-5 space-y-5 bg-muted/20">
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
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
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

          {/* Result cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: "Quilombo da Saúde", city: "São Paulo, SP", type: "Quilombo Urbano", status: "Publicado" },
              { name: "Terreiro Casa Branca", city: "Salvador, BA", type: "Terreiro", status: "Publicado" },
              { name: "Memorial Zumbi", city: "Rio de Janeiro, RJ", type: "Memorial", status: "Em revisão" },
              { name: "Feira do Bixiga", city: "São Paulo, SP", type: "Feira", status: "Publicado" },
            ].map(r => (
              <div key={r.name} className="rounded-lg border border-border p-4 hover:shadow-md transition-shadow space-y-2">
                <div className="flex items-start justify-between">
                  <div>
                    <h5 className="font-display font-semibold text-sm">{r.name}</h5>
                    <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5"><MapPin className="h-3 w-3" />{r.city}</p>
                  </div>
                  <Badge variant={r.status === "Publicado" ? "default" : "secondary"} className="text-[10px]">{r.status}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] px-2 py-0.5 rounded bg-muted font-medium">{r.type}</span>
                  <div className="flex gap-1">
                    <button className="p-1 hover:bg-muted rounded"><Eye className="h-3.5 w-3.5 text-muted-foreground" /></button>
                    <button className="p-1 hover:bg-muted rounded"><Share2 className="h-3.5 w-3.5 text-muted-foreground" /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ─── SEÇÃO 4: FLUXO DE CADASTRO ─── */

const CadastroFlow = () => (
  <section className="space-y-8">
    <div>
      <div className="flex items-center gap-3 mb-2">
        <span className="w-1.5 h-8 rounded-full bg-nix-orange" />
        <h2 className="text-2xl font-display font-bold">Fluxo de Cadastro e Moderação</h2>
      </div>
      <p className="text-muted-foreground ml-5">Visão do processo de submissão e aprovação</p>
    </div>

    {/* Flow steps */}
    <div className="grid grid-cols-4 gap-4">
      {[
        { step: 1, title: "Preenchimento", desc: "Usuário submete via formulário", icon: FileText, color: "bg-nix-orange" },
        { step: 2, title: "Curadoria", desc: "Dados entram em revisão interna", icon: Eye, color: "bg-nix-purple" },
        { step: 3, title: "Aprovação", desc: "Equipe Nix revisa e padroniza", icon: UserCheck, color: "bg-nix-teal" },
        { step: 4, title: "Publicação", desc: "Registro publicado no sistema", icon: CheckCircle2, color: "bg-accent" },
      ].map((s, i) => (
        <div key={s.step} className="relative">
          {i < 3 && <div className="absolute top-8 right-0 w-4 h-0.5 bg-border translate-x-2 z-10" />}
          <div className="rounded-xl border border-border bg-card p-5 text-center space-y-3 hover:shadow-md transition-shadow">
            <div className={`w-12 h-12 rounded-xl ${s.color}/10 flex items-center justify-center mx-auto`}>
              <s.icon className={`h-6 w-6 text-foreground/70`} />
            </div>
            <div>
              <span className="text-[10px] font-display font-bold uppercase tracking-widest text-muted-foreground">Etapa {s.step}</span>
              <h5 className="font-display font-semibold text-sm mt-1">{s.title}</h5>
              <p className="text-xs text-muted-foreground mt-1">{s.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Mock form preview */}
    <div className="rounded-xl border border-border bg-card p-6 space-y-4">
      <h4 className="font-display font-semibold flex items-center gap-2"><FileText className="h-5 w-5 text-nix-orange" /> Formulário de Cadastro</h4>
      <div className="grid grid-cols-2 gap-4">
        {["Nome do local / coletivo", "Cidade / Estado"].map(f => (
          <div key={f} className="space-y-1.5">
            <label className="text-xs font-medium text-muted-foreground">{f}</label>
            <div className="h-10 rounded-lg bg-muted/50 border border-border" />
          </div>
        ))}
        {["Endereço completo", "Contato (e-mail / telefone)"].map(f => (
          <div key={f} className="space-y-1.5">
            <label className="text-xs font-medium text-muted-foreground">{f}</label>
            <div className="h-10 rounded-lg bg-muted/50 border border-border" />
          </div>
        ))}
        <div className="col-span-2 space-y-1.5">
          <label className="text-xs font-medium text-muted-foreground">Descrição</label>
          <div className="h-24 rounded-lg bg-muted/50 border border-border" />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-muted-foreground">Mapeamento</label>
          <div className="h-10 rounded-lg bg-muted/50 border border-border flex items-center px-3 text-xs text-muted-foreground">Selecione o mapeamento...</div>
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-muted-foreground">Categoria</label>
          <div className="h-10 rounded-lg bg-muted/50 border border-border flex items-center px-3 text-xs text-muted-foreground">Selecione a categoria...</div>
        </div>
      </div>
      <div className="flex justify-end gap-3 pt-2">
        <Button variant="outline" size="sm">Cancelar</Button>
        <Button size="sm" className="gap-1.5"><Send className="h-3.5 w-3.5" /> Enviar para curadoria</Button>
      </div>
    </div>
  </section>
);

/* ─── PAGE ─── */

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-6 py-10 space-y-16">
        <div>
          <h1 className="text-3xl font-display font-bold">Plataforma Nix — Design de Referência</h1>
          <p className="text-muted-foreground mt-2">Exemplos de interface para cursos EAD, mapeamentos, filtros e fluxo de cadastro</p>
        </div>
        <CursosSection />
        <MapeamentosLanding />
        <MapeamentoFilters />
        <CadastroFlow />
      </div>
    </div>
  );
};

export default Index;
