﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ToDo.WebApi.Dtos
{
    public class LivroDto
    {
        public Guid autorAggregateId { get; set; }
        public Guid generoAggregateId { get; set; }
        public string Titulo { get; set; }
        public string Capa { get; set; }
        public string Sinopse { get; set; }
        public int? Paginas { get; set; }
    }
}
